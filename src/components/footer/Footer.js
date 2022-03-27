import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-column justify-center align-center gap-1">
      <div className="flex justify-between p-1">
        <ul>
          <li className="white font-size-large p-1 bold-500">Home</li>
          <li className="white font-size-large px-1">Product</li>
          <li className="white font-size-large px-1">Cart</li>
          <li className="white font-size-large px-1">wishlist</li>
        </ul>
        <ul>
          <li className="white font-size-large p-1 bold-500">Help</li>
          <li className="white font-size-large px-1">Payments</li>
          <li className="white font-size-large px-1">Shipping</li>
          <li className="white font-size-large px-1">FAQ</li>
        </ul>
        <ul>
          <li className="white font-size-large p-1 bold-500">About</li>
          <li className="white font-size-large px-1">Contact Us</li>
          <li className="white font-size-large px-1">Mail Us</li>
        </ul>
        <div className="flex flex-column align-center gap-1">
          <li className="white font-size-large p-1 bold-500">Social</li>
          <div className="facebook">
            <FaFacebookSquare size="20" color="white" />
          </div>
          <div className="instagram">
            <FaInstagramSquare size="20" color="white" />
          </div>
          <div className="twitter">
            <FaTwitterSquare size="20" color="white" />
          </div>
        </div>
        <ul className="flex flex-column gap-1">
          <li className="white font-size-large p-1 bold-500">Office Address</li>
          <li className="white font-size-large px-1">
            {" "}
            1 Apple Park Way Cupertino, California, United States.
          </li>
          <li className="white font-size-large px-1">
            Outer Ring Road, Devara Village, Bengaluru, Karnataka, India.
          </li>
        </ul>
      </div>
      <div className="white font-size-large bold-500 p-1">
        All rights reserved by <span className="red">CricKit</span> | Created by
        Ozair Khan
      </div>
    </footer>
  );
};

export default Footer;
