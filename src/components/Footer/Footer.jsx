import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae praesentium incidunt obcaecati expedita libero magni, exercitationem minima ratione. Hic consequatur recusandae placeat unde ea sint repellat facere! Pariatur corporis voluptate doloribus id unde delectus, esse labore consequuntur illum officiis quis quidem ipsam eius, exercitationem aliquid accusamus eaque quae deserunt expedita beatae! Voluptatibus, aperiam doloremque.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        Old Nagardas Rd, Andheri (west)		   Mumbai, Maharashtra (7107)
                    </div>
                </div>

                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                         +91 02228211989
                    </div>
                </div>

                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        marlo58@deol.ac.in
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Threatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">Categories</div>
                <div className="text">Privacy policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottombar-content">
                <div className="text">KANGROO 2023 CREATED BY KANGROO E-COMMERCE SOLUTIONS.</div>
            </div>
            <img src={Payment} alt="" />
        </div>
    </footer>
    ) 
}

export default Footer;
