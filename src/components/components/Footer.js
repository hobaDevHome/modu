import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">M</div>
        <div className="footer-links">
          <a href="/team">Team</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <FaFacebook size={20} />
          </a>
          <a href="#">
            <FaTwitter size={20} />
          </a>
          <a href="#">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
