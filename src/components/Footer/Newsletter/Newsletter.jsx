import React from "react";
import {FaFacebookF,FaTwitter, FaInstagram,FaLinkedin} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <div className="small-text">News Letter</div>
                <span className="big-text">Signup for latest updates and news</span>
                <div className="form">
                    <input id="email" type="text" placeholder="Email Address"/>
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance of Privacy policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedin size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
