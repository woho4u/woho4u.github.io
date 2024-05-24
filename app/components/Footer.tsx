import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="socials-footer">
          <div className="icon-container">
            <FontAwesomeIcon
              className="social-icon"
              size="2x"
              icon={faSquareFacebook}
            />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon
              className="social-icon"
              size="2x"
              icon={faSquareGithub}
            />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon
              className="social-icon"
              size="2x"
              icon={faSquareInstagram}
            />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon
              className="social-icon"
              size="2x"
              icon={faSquareXTwitter}
            />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon
              className="social-icon"
              size="2x"
              icon={faLinkedin}
            />
          </div>
        </div>
        <div className="footer-text">
          <p>© 2021 - All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
