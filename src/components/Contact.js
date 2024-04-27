import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiBananaPeeled } from "react-icons/gi";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contacts">
        <div>
          <a href="#" className="logo">
            <GiBananaPeeled size={30} />
            <h3>fruitsWorld</h3>
          </a>
        </div>
        <div className="social">
          <FaFacebook className="fa-brands" size={40} />
          <FaInstagram className="fa-brands" size={40} />
          <FaTwitter className="fa-brands" size={40} />
          <FaYoutube className="fa-brands" size={40} />
        </div>
      </div>
      <div className="copyright">
        <h5>All Rights Reserved</h5>
      </div>
    </div>
  );
};

export default Contact;
