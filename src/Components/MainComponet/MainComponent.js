import React from "react";
import "./style.css";
import backgroundimg from "../Image/backgroundimg.webp";
import emails from "../Image/emails.svg";
import location from "../Image/location.svg";
import phone from "../Image/phone.png";

const MainComponent = () => {
  return (
    <div>
      <div className="Imgwith-text">
        <div>
          <img
            src={backgroundimg}
            style={{ width: "100%", height: "auto" }}
            alt="backgroundImg"
          />
        </div>

        
          <div className="contact">
            <div className="contact-us">
              <h1>Contact Us</h1>
            </div>
            <div className="info-and-button">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                <br />
                sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
              <button>
                Home
                <img
                  src="https://img.icons8.com/material-rounded/24/double-right.png"
                  width={"10px"}
                  alt="double-right"
                />
                Contact Us
              </button>
            </div>
          </div>
      </div>

      <br />
      <div className="container">
        <div className="Right">
          <h2>
            {" "}
            <b>
              Let Start <br /> Something Great!
            </b>
          </h2>
          <p>
            Proactively customize cross-media schemas rather than high-payoff
            the xustomer service. Uniquely enable extensible niche.
          </p>

          <div className="icons-container">
            <div className="bx">
              <div className="icons1">
                <img src={location} style={{ width: "30px" }} />
              </div>
              <p>
                Akshya Nagar 1st Block 1st Cross,
                <br />
                Rammurthy Nagar,
                <br />
                Bangalore-560016
              </p>
            </div>
            <br />
            <br />
            <div className="bx">
              <div className="icons1">
                <img src={phone} style={{ width: "30px" }} />
              </div>
              <p>+91 12345 67890</p>
            </div>

            <br />
            <br />
            <div className="bx">
              <div className="icons1">
                <img src={emails} style={{ width: "30px" }} />
              </div>
              <p>info@company.com</p>
            </div>
          </div>
        </div>

        <div className="left">
          <div className="left-content">
            <h3>Need Help?</h3>
            <p>
              Proactively fashon world-class leadership vis-a-v-s enterprises
              e-service. Great strong leadership
            </p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Your message" />
            <br />

            <button className="button">
              {" "}
              <b>SEND INQUIRY</b>
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* mapp  */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.661587379261!2d73.9111797!3d18.5441888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700982790062!5m2!1sen!2sin"
        width="100%"
        height="350px"
      />
    </div>
  );
};

export default MainComponent;
