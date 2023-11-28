import React from "react";
import "./style.css";
import link from "../Image/link.svg";
import telegram from "../Image/telegram.svg";
import twiter from "../Image/twiter.svg";
import linkedin1 from "../Image/linkedin1.svg";
import phone from "../Image/phone.png";
import emails from "../Image/emails.svg";
import location from "../Image/location.svg";
import icons8 from "../Image/icons8.png";


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column">
            <h4>FOLLOW US</h4>
           
          <div className="footer-column-content">
            <div className="social-media">
              <img src={linkedin1} width={"10px"} alt="LinkedIn icon" />
            </div>
            <div className="social-media">
              <img src={telegram} width={"10px"} alt="Telegram icon" />
            </div>
            <div className="social-media">
              <img src={twiter} width={"10px"} alt="Twitter icon" />
            </div>
          </div>
          <div className="link-container">
            <div className="link-icon">
              <img src={link} width={"20px"} alt="Email icon" />
            </div>
            <p>https://company.com</p>
          </div>
        </div>

        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <div className="our-services">
            <p>
              <img src={icons8} width={"10px"} alt="arow icon" />
              Lorem ipsum dolor
            </p>
            <p>
              <img src={icons8} width={"10px"} alt="arow icon" />
              Lorem ipsum dolor
            </p>
            <p>
              <img src={icons8} width={"10px"} alt="arow icon" />
              Lorem ipsum dolor
            </p>
            <p>
              <img src={icons8} width={"10px"} alt="arow icon" />
              Lorem ipsum dolor
            </p>
          </div>
        </div>

        <div className="footer-column hidden">
          <h4 style={{ visibility: "hidden" }}>g</h4>
          <p>
            <img src={icons8} width={"10px"} alt="aro icon" />
            Lorem ipsum dolor
          </p>
          <p>
            <img src={icons8} width={"10px"} alt="aro icon" />
            Lorem ipsum dolor
          </p>
          <p>
            <img src={icons8} width={"10px"} alt="aro icon" />
            Lorem ipsum dolor
          </p>
          <p>
            <img src={icons8} width={"10px"} alt="aro icon" />
            Lorem ipsum dolor
          </p>
        </div>

        <div className="footer-column get-in-touch">
          <h4>GET IN TOUCH</h4>
          <div className="get-in-touch">
            <div id="last-col-content">
              <div>
                <img src={location} width={"20px"} alt="location icon" />
              </div>
              <div>
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                <br />
                Bangalore-560016
              </div>
            </div>
            <br />
            <hr />
            <div className="phone-mail">
              <div className="phn-mail-item">
                <img src={phone} width={"20px"} alt="phone icon" />
                <span> Phone: +91 12345 67890 </span>
              </div>
              <div className="phn-mail-item">
                <img src={emails} width={"20px"} alt="Email icon" />
                <span> Email: info@company.com </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-footer">
        <div className="last-footer-content">
          <p>Copyright © 2023, iAssureIT All Rights Reserved</p>
          <p>
            Designed & Developed By{" "}
            <b>iAssure International Technologies Pvt. Ltd.</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
