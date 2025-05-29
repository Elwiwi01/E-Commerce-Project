import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import github_icon from '../Assets/github_icon.png';
import linkedin_icon from '../Assets/linkedin_icon.png';
import instagram_icon from '../Assets/instagram_icon.png';
import banner_image from '../Assets/banner_image.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-banner">
        <img src={banner_image} alt="Promotional banner" />
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footer_logo} alt="Modiasn Jewelry Logo" />
          <p>Modiasn Jewelry</p>
        </div>
        <ul className="footer-links">
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <a href="https://github.com/Elwiwi01" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} alt="GitHub" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a href="https://www.linkedin.com/in/slmly/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a href="https://www.instagram.com/lyna.rar/" target="_blank" rel="noopener noreferrer">
              <img src={instagram_icon} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
