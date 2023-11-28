import React from "react";
import "./style.css";
import phone from "../Image/phone.png";

import emails from "../Image/emails.svg";

const Navbar = () => {
  return (
    <>
      <div className="Heading">
        <div className="head-content">
          <img src={phone} style={{ height: "25px", marginTop: "13px" }} />
          <span>+91 1234567890</span>
        </div>
        <div className="head-content">
          <img src={emails} style={{ height: "25px", marginTop: "13px" }} />{" "}
          <span> info@company.com</span>
        </div>
      </div>

      <div className="Navbar">
        <div className="logo">
          <b>LOGO</b>
        </div>

        <div>
          <b>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>TESTIMONIALIS</li>
              <li>BLOGS</li>
              <li className="contact-item">CONTACT</li>
            </ul>
          </b>
        </div>
      </div>
    </>
  );
};

export default Navbar;
