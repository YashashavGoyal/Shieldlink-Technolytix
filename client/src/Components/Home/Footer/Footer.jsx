import React from 'react';
import "../../../assets/css/style.css"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Logo and About */}
        <div className="footer-section footer-about">
          <h2 className="footer-logo">Shieldlink</h2>
          <p>
            Shieldlink offers world-class IoT security solutions to safeguard your connected devices from vulnerabilities. We strive to secure the future of connected technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@shieldlink.com">info@shieldlink.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 1234 Shieldlink Ave, Secure City, CA 90001</p>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 Shieldlink. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
