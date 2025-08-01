import React, { useState } from 'react';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import Sidebar from '../components/Sidebar';
import {
  getContainerStyles,
  getContentStyles,
  getTitleStyles,
  getCardStyles,
  getHeadingStyles,
  getTextStyles,
  getInputStyles,
  getButtonStyles,
  getSuccessStyles,
} from '../utils/themeStyles';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className={getContainerStyles(theme)}>
      {theme.layout.type === 'sidebar' && <Sidebar />}
      <div className={getContentStyles(theme, 'max-w-4xl mx-auto')}>
        <h1 className={getTitleStyles(theme)}>Contact Us</h1>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Get in Touch</h2>
          <p className={getTextStyles(theme)}>
            Have questions about our multi-theme application? Want to share feedback 
            or suggest improvements? We'd love to hear from you!
          </p>
        </div>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {React.createElement(FaEnvelope as React.ElementType, { className: "text-2xl" })}
                <div>
                  <p className="font-semibold">Email</p>
                  <p className={getTextStyles(theme)}>contact@multitheme.app</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {React.createElement(FaMobileAlt as React.ElementType, { className: "text-2xl" })}
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className={getTextStyles(theme)}>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {React.createElement(FaMapMarkerAlt as React.ElementType, { className: "text-2xl" })}
                <div>
                  <p className="font-semibold">Address</p>
                  <p className={getTextStyles(theme)}>123 Theme Street<br />Design City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {React.createElement(FaClock as React.ElementType, { className: "text-2xl" })}
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className={getTextStyles(theme)}>Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={getCardStyles(theme)}>
          <h2 className={getHeadingStyles(theme)}>Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className={getSuccessStyles(theme)}>
              <p className="font-semibold flex items-center"> Message sent successfully!</p>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={getInputStyles(theme)}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={getInputStyles(theme)}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={getInputStyles(theme)}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={getInputStyles(theme)}
                placeholder="Tell us about your inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${getButtonStyles(theme)} disabled:opacity-50 w-full sm:w-auto`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 