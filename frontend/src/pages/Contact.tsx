import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Star, CheckCircle, Linkedin } from 'lucide-react';

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "McAnthony delivered an exceptional project that exceeded our expectations. His communication and technical expertise are outstanding.",
      rating: 5
    },
    {
      name: "Michael Adetunji",
      role: "Product Manager, InnovateLab",
      content: "Working with McAnthony was a game-changer. He transformed our vision into a beautiful, functional web application.",
      rating: 5
    },
    {
      name: "Ikemefuna A",
      role: "Founder, CreativeStudio",
      content: "Professional, reliable, and incredibly talented. McAnthony's development skills helped us launch successfully.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 2-6 months. I'll provide a detailed timeline during our consultation."
    },
    {
      question: "What's your development process?",
      answer: "I follow an agile development process: Discovery → Planning → Design → Development → Testing → Deployment. You'll receive regular updates and have input at every stage."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! I offer 3 months of free support for bug fixes and minor updates. Extended support and maintenance plans are available for long-term projects."
    },
    {
      question: "What technologies do you work with?",
      answer: "I specialize in React, Node.js, TypeScript, MongoDB, PostgreSQL, and AWS. I also work with React Native for mobile apps and various other modern technologies."
    }
  ];

  const contactMethods = [
    {
      title: "Email",
      description: "Best for detailed project discussions",
      value: "mcanthonyarinze@gmail.com",
      icon: Mail,
      action: "mailto:mcanthonyarinze@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Phone",
      description: "Quick questions and urgent matters",
      value: "+234 (811) 745-1648",
      icon: Phone,
      action: "tel:+2348117451648",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "LinkedIn",
      description: "Professional networking and updates",
      value: "Connect with me",
      icon: Linkedin,
      action: "https://linkedin.com/in/mcanthony",
      color: "from-blue-600 to-blue-800"
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-200 rounded-full opacity-20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Let's Start a Conversation
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
                  Get In <span className="gradient-text">Touch</span>
                </div>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                  Ready to start your next project? Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
                </div>
              </motion.p>

              {/* Quick Contact Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">24h</div>
                  <div className="text-sm text-secondary-500">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                  <div className="text-sm text-secondary-500">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Free</div>
                  <div className="text-sm text-secondary-500">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                  <div className="text-sm text-secondary-500">Years Experience</div>
                </div>
                </div>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Multiple ways to reach me - pick what works best for you.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="group">
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block"
                >
                  <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-secondary-200">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 text-center">{method.title}</h3>
                    <p className="text-secondary-600 mb-3 text-center">{method.description}</p>
                    <p className="text-primary-600 font-medium text-center group-hover:text-primary-700 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-soft border border-secondary-200">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Send a Message
                </h2>
                <p className="text-secondary-600 mb-8">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-secondary-900 mb-6">
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
                <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
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
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Response Time */}
                <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                What Clients Say
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Don't just take my word for it - hear from satisfied clients.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-secondary-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600">
              Quick answers to common questions about working with me.
            </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{faq.question}</h3>
                <p className="text-secondary-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 