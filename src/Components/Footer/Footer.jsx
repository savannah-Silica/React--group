import React from "react";
import './Footer.css'
import logo from "../../Assets/logo.png";
import { FaGithub, FaSlack, FaInstagram } from "react-icons/fa";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-links">
        <div className="footer-link">
          <p className="logo-link"><CiLocationOn /> Global</p>
          <p className="logo-link"><FaGithub /> savannah-Silica</p>
          <p className="logo-link"><FaSlack /> savannah-Silica</p>
          <p className="logo-link"><FaInstagram /> @savannahtechies</p>
          <p className="logo-link"><SiGmail /> savannah@gmail.com</p>
          <p className="logo-link"><CiTwitter /> @savannahtechies</p>
        </div>
        <div className="footer-link">
          <h2 className="link-title">Community</h2>
          <p>Blog</p>
          <p>Support</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Terms of service</p>
        </div>
        <div className="footer-link">
          <h2 className="link-title">About</h2>
          <p>Team</p>
          <p>Projects</p>
          <p>Sponsors</p>
        </div>
        <div className="footer-link">
          <h2 className="link-title">What we do</h2>
          <p>UI/Design</p>
          <p>Open source</p>
          <p>Coding</p>
        </div>
      </div>
      <div className="copy">
        <p>Copyright @ 2022 Savannah Silica. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
