import React from "react";
import "./Footer.css";
import Newsletter from "../Newsletter/Newsletter"; // Import the Newsletter component
import logoFooter from "../../assets/logo-footer.png"; // Import the logo image

const Footer = () => {
  return (
    <div className="footer-section">
      <Newsletter />
      <div className="footer">
        <img src={logoFooter} alt="Footer Logo" className="footer-logo" />
        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="text-slate-100">About Us</h4>
            <p>
              We provide the best cricket player selection platform. we are
              passionate and dedicated team.
            </p>
          </div>
          <div className="footer-column">
            <h4 className="text-slate-100">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-slate-50">Subscribe</h4>
            <p className="mx-16">
              Subscribe to our newsletter for the latest updates
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="copyright">
          © 2024 Cricket Selection. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
