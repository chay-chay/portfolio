import React from "react";
import "./footer.css";
import "../index.css";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Footer = () => (
    <section className="footer">
            <h3 className="contact">
              <div className="text">
             Chayanit McCormick 2021 ©
             </div>
             <div>
              <a href="https://github.com/chay-chay/recipes-frontend" className="text">
                <SiGithub />
              </a>
              <a href="mailto:chayanit.chaisri@gmail.com" className="text">
                <FiMail />
              </a>
              <a href="https://www.youtube.com/channel/UC-wW2rQ7mDnS0K9b7M1RPGA" className="text">
                <SiYoutube />
              </a>
              <a href="https://www.linkedin.com/in/chayanit-chaisri" className="text">
                <SiLinkedin />
              </a>
              </div>
              
            </h3>
    </section>
);

export default Footer;
