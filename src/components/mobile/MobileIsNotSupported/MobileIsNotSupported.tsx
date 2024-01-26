import React from "react";
import "./MobileIsNotSupportedStyle.css";
import BrokenPhone from "../../../images/BrokenPhone.svg";

export const MobileIsNotSupported: React.FC = () => {
    return (
        <div className="mobile-not-supported">
            <img src={BrokenPhone} alt="Mobile Not Supported" className="centered-image"/>
            <p className="white-text">Mobile version of my website is not currently supported.<br></br>Visit my website on your desktop.</p>
        </div>
    );
}