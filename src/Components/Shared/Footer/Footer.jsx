import React from "react";
import logo from "./../../../Images/logo.png";
import "./Footer.css";
import apps from "./../../../Images/app-download.439edada.png";
import payments from "./../../../Images/ssl-commerce.1d268dce.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className="address">
          <div className="logo">
            <img src={logo} alt="" />
            <h3>ZerOne School</h3>
          </div>

          <p> Level-4, 34, Awal Centre, Banani, Dhaka</p>
          <p>
            {" "}
            Official: <Link to="https://web.programming-hero.com/">web@programming-hero.com</Link>
          </p>
          <p> Helpline : 01322810867 , 01322810873</p>
          <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
          <img className="img" src={apps} alt="" />
        </div>
        <div className="middle-text">
          <p>Blog</p>
          <p>Success</p>
          <p>About us</p>
          <p>Refund policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy & App Privacy Policy</p>
          <div className="social">
           <p> <FaFacebookF /></p>
           <p> <FaInstagram /></p>
           <p> <FaLinkedinIn /></p>
          <p>  <FaYoutube /></p>
          </div>
        </div>
        <div className="payments">
          <img src={payments} alt="" />
        </div>
      </section>
      <p className="copyright-caption">Copyright © 2022 Programming-hero.com</p>
    </footer>
  );
};

export default Footer;
