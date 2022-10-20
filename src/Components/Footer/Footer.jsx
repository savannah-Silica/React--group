import React from "react";
import logo from "../../Assets/logo.png";
import { FaGithub, FaSlack, FaInstagram } from "react-icons/fa";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="con">
        <div className="icons-con">
          <div className="img-con">
            <img src={logo} alt="" className="f1-logo" />
            <h3>
              SAVANNAH<br></br> SILICA
            </h3>
          </div>

          <div className="i1">
            <CiLocationOn />
            <a href="#global" className="p">
              <p>Global</p>
            </a>
          </div>

          <div className="i1">
            <FaGithub />
            <a href="#savannahsilica" className="p">
              <p>Savannah-Silica</p>
            </a>
          </div>

          <div className="i1">
            <FaSlack />
            <a href="#SavannahSilica" className="p">
              <p>Savannah-Silica</p>
            </a>
          </div>

          <div className="i1">
            <FaInstagram />
            <a href="#savannatechies" className="p">
              <p>@savannahtechies</p>
            </a>
          </div>

          <div className="i1">
            <SiGmail />
            <a href="#savannaemail" className="p">
              <p>savannahsilica@gmail.com</p>
            </a>
          </div>

          <div className="i1">
            <CiTwitter />
            <a href="#savannatwitter" className="p">
              <p>@savannahtechies</p>
            </a>
          </div>
        </div>

        <div className="i2">
          <h4>Commmunity</h4>
          <a href="#blog">
            <p>Blog</p>
          </a>
          <a href="#support">
            <p>Support</p>
          </a>
          <a href="#privacypolicy">
            <p>Privacy Policy</p>
          </a>
          <a href="#cookiepolicy">
            <p>Cookie Policy</p>
          </a>
          <a href="#termsofservice">
            <p>Terms of Service</p>
          </a>
        </div>

        <div className="i2">
          <h4>About</h4>
          <a href="#team">
            <p>Team</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#sponsors">
            <p>Sponsors</p>
          </a>
        </div>

        <div className="i2">
          <h4>What we do</h4>
          <a href="#uidesign">
            <p>UI/Design</p>
          </a>
          <a href="#opensource">
            <p>Open-Source</p>
          </a>
          <a href="#coding">
            <p>Coding</p>
          </a>
        </div>
      </div>

      <div className="copy">
        <p>Copyright &copy; 2022 Savannah Silica. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
