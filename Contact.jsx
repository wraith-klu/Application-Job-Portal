import React from 'react';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">We'd love to hear from you!</p>
      </div>

      <div className="contact-info">
        <div className="contact-item" onClick={() => handleCopy('2300039160@gmail.com')}>
          <div className="contact-icon">📧</div>
          <div className="contact-details">
            <h3>Email Us</h3>
            <p>2300039160@gmail.com</p>
            <span className="copy-hint">Click to copy</span>
            {copied && <span className="copied-toast">Copied!</span>}
          </div>
        </div>

        <div className="contact-item" onClick={() => handleCopy('9792453534')}>
          <div className="contact-icon">📞</div>
          <div className="contact-details">
            <h3>Call Us</h3>
            <p>+91 9792453534</p>
            <span className="copy-hint">Click to copy</span>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin">in</i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter">𝕏</i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram">📸</i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>Available Monday to Friday, 9:00 AM - 6:00 PM IST</p>
        <p>Response time: Usually within 24 hours</p>
      </div>
    </div>
  );
}

export default Contact;
