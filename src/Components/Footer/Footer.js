import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="f-container">
      <hr />
      <div className="footer">
        <div className="social-icons">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="blur blur-f"></div>
      <div className="blur blur-f"></div>
    </div>
  );
};

export default Footer;
