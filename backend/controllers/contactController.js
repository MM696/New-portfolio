import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); 

// Create transporter for email
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });
};

// Send email notification to yourself (admin)
const sendEmailNotification = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
        ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
        ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
        ${contactData.budget ? `<p><strong>Budget:</strong> ${contactData.budget}</p>` : ''}
        ${contactData.timeline ? `<p><strong>Timeline:</strong> ${contactData.timeline}</p>` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully');
  } catch (error) {
    console.error('❌ Error sending email notification:', error.message);
  }
};

// Send auto-reply to the user
const sendAutoReply = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: 'Thank you for your message!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${contactData.name},</p>
        <p>Thank you for your message. I've received your inquiry and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        </div>
        <p>I typically respond within 24-48 hours during business days.</p>
        <p>Best regards,<br>Macanthony Eze</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent successfully');
  } catch (error) {
    console.error('❌ Error sending auto-reply:', error.message);
  }
};

export { sendEmailNotification, sendAutoReply };


// Submit contact form
export const submitContact = async (req, res) => {
  try {
    console.log('📩 Incoming contact form submission');
    console.log('Request body (parsed):', req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      console.warn('⚠️ Request body is empty');
      return res.status(400).json({
        success: false,
        error: 'Request body is empty'
      });
    }

    const contactData = {
      ...req.body,
      ipAddress: req.ip || req.connection?.remoteAddress,
      userAgent: req.get('User-Agent')
    };

    console.log('Processed contact data (before save):', contactData);

    const contact = new Contact(contactData);

    console.log('📝 About to save contact...');
    const savedContact = await contact.save();
    console.log('✅ Contact saved successfully:', savedContact);

    Promise.all([
      sendEmailNotification(contactData),
      sendAutoReply(contactData)
    ]).catch(error => console.error('❌ Error sending emails:', error));

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: { id: savedContact._id, submittedAt: savedContact.createdAt }
    });
  } catch (error) {
    console.error('❌ Error submitting contact form:', error);
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      console.error('❌ Validation errors:', errors);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form'
    });
  }
};



// Get all contact submissions (admin only)
export const getContacts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.status = status;

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query
    const contacts = await Contact.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    // Get total count for pagination
    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalItems: total,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts'
    });
  }
};

// Get single contact
export const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    
    const contact = await Contact.findById(id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    // Mark as read if not already read
    if (contact.status === 'New') {
      contact.status = 'Read';
      contact.readAt = new Date();
      await contact.save();
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact'
    });
  }
};

// Update contact status
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['New', 'Read', 'Replied', 'Closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status'
      });
    }

    const updateData = { status };
    
    // Set repliedAt if status is 'Replied'
    if (status === 'Replied') {
      updateData.repliedAt = new Date();
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact,
      message: 'Contact status updated successfully'
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update contact status'
    });
  }
};

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    
    const contact = await Contact.findByIdAndDelete(id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete contact'
    });
  }
};

// Get contact statistics
export const getContactStats = async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'New' });
    const readContacts = await Contact.countDocuments({ status: 'Read' });
    const repliedContacts = await Contact.countDocuments({ status: 'Replied' });
    const closedContacts = await Contact.countDocuments({ status: 'Closed' });

    // Get contacts by month (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const contactsByMonth = await Contact.aggregate([
      { $match: { createdAt: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    // Get recent contacts
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email subject status createdAt');

    res.json({
      success: true,
      data: {
        totalContacts,
        newContacts,
        readContacts,
        repliedContacts,
        closedContacts,
        contactsByMonth,
        recentContacts
      }
    });
  } catch (error) {
    console.error('Error fetching contact stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact statistics'
    });
  }
}; 