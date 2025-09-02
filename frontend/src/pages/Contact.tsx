import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: '',
    budget: 'Not specified',
    timeline: 'Not specified',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://new-portfolio-backend-1vq3.onrender.com/api/post-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Try again.');
      }

      const data = await response.json();
      console.log('Success:', data);
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        company: '',
        budget: 'Not specified',
        timeline: 'Not specified',
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
  <div className="min-h-screen py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-secondary-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="What's this about?"
                />
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="Not specified">Not specified</option>
                    <option value="Under $1k">Under $1k</option>
                    <option value="$1k - $5k">$1k - $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k+">$25k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="Not specified">Not specified</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`btn btn-primary btn-lg w-full flex items-center justify-center ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <span className="loader mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {status && (
                <p
                  className={`mt-4 text-sm text-center ${
                    status.includes('success')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>

          {/* Contact Info */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-secondary-900 mb-6">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-secondary-900">Email</h3>
            <p className="text-secondary-600">mcanthonyarinze@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-secondary-900">Phone</h3>
            <p className="text-secondary-600">+234 (811) 745-1648</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-secondary-900">Location</h3>
            <p className="text-secondary-600">Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </div>

    {/* What I Offer */}
    <div className="card p-6 mt-10">
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
        What I Offer
      </h3>
      <ul className="space-y-3 text-secondary-600">
        {[
          "Custom web application development",
          "Mobile app development",
          "UI/UX design and implementation",
          "API development and integration",
          "Technical consulting and mentoring",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Response Time */}
    <div className="card p-6 mt-10">
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
        Response Time
      </h3>
      <p className="text-secondary-600">
        I typically respond to all inquiries within 24-48 hours during business
        days. For urgent projects, please mention it in your message.
      </p>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 