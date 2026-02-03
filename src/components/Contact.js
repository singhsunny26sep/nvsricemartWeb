import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    { icon: '📍', title: 'Our Location', content: '456 Grain Market, Rice District, India', subtitle: 'Visit our warehouse' },
    { icon: '📞', title: 'Phone Number', content: '+91 98765 43210', subtitle: 'Mon-Sat: 9AM - 8PM' },
    { icon: '✉️', title: 'Email Address', content: 'info@nvsricemart.com', subtitle: 'We reply within 24 hours' },
    { icon: '🕒', title: 'Working Hours', content: 'Mon - Sat: 9:00 AM - 8:00 PM', subtitle: 'Sunday: 10:00 AM - 2:00 PM' }
  ];

  const faqs = [
    { question: 'What is the minimum order quantity?', answer: 'For retail orders, there is no minimum. For bulk orders (25kg+ bags), we offer special pricing.' },
    { question: 'Do you deliver across India?', answer: 'Yes! We deliver to all major cities across India. Free delivery within the city, nominal charges for outstation.' },
    { question: 'How can I track my order?', answer: 'Once your order is dispatched, you will receive a tracking number via SMS and email.' },
    { question: 'What payment methods do you accept?', answer: 'We accept Cash on Delivery, UPI, Credit/Debit Cards, Net Banking, and Wallets.' }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <span className="hero-badge">📬 Get in Touch</span>
          <h1 className="hero-title">
            Contact
            <span className="highlight"> Us</span>
          </h1>
          <p className="hero-description">
            Have questions about our rice products or need help with your order? 
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">
                  <span>{info.icon}</span>
                </div>
                <h3 className="contact-title">{info.title}</h3>
                <p className="contact-content">{info.content}</p>
                <p className="contact-subtitle">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-container">
              <div className="form-header">
                <span className="section-badge">Send us a Message</span>
                <h2 className="section-title">We'd Love to Hear From You</h2>
                <p className="section-description">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="bulk">Bulk Order Quote</option>
                        <option value="quality">Quality Concern</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <span className="map-icon">📍</span>
                  <p>View on Google Maps</p>
                </div>
              </div>
              <div className="additional-info">
                <h3>Quick Response Guarantee</h3>
                <ul className="response-list">
                  <li>
                    <span className="response-icon">✓</span>
                    <span>Phone inquiries answered within 2 minutes</span>
                  </li>
                  <li>
                    <span className="response-icon">✓</span>
                    <span>Email responses within 24 hours</span>
                  </li>
                  <li>
                    <span className="response-icon">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                  <li>
                    <span className="response-icon">✓</span>
                    <span>24/7 WhatsApp support</span>
                  </li>
                </ul>
                <div className="whatsapp-button">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <span>💬</span> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <div className="cta-card">
            <h2>Ready to Order Premium Rice?</h2>
            <p>Browse our collection of high-quality rice varieties and place your order today</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-white">Shop Now</Link>
              <Link to="/services" className="btn btn-outline-white">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Contact;
