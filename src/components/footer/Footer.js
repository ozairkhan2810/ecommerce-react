import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="flex flex-column justify-center align-center gap-1">
      <div class="flex justify-between p-1">
        <ul>
          <li class="white font-size-large p-1 bold-500">Home</li>
          <li class="white font-size-large px-1">Product</li>
          <li class="white font-size-large px-1">Cart</li>
          <li class="white font-size-large px-1">wishlist</li>
        </ul>
        <ul>
          <li class="white font-size-large p-1 bold-500">Help</li>
          <li class="white font-size-large px-1">Payments</li>
          <li class="white font-size-large px-1">Shipping</li>
          <li class="white font-size-large px-1">FAQ</li>
        </ul>
        <ul>
          <li class="white font-size-large p-1 bold-500">About</li>
          <li class="white font-size-large px-1">Contact Us</li>
          <li class="white font-size-large px-1">Mail Us</li>
        </ul>
        <div class="flex flex-column align-center gap-1">
          <li class="white font-size-large p-1 bold-500">Social</li>
          <div class="facebook">
            <FaFacebookSquare size="20" color="white" />
          </div>
          <div class="instagram">
            <FaInstagramSquare size="20" color="white" />
          </div>
          <div class="twitter">
            <FaTwitterSquare size="20" color="white" />
          </div>
        </div>
        <ul class="flex flex-column gap-1">
          <li class="white font-size-large p-1 bold-500">Office Address</li>
          <li class="white font-size-large px-1">
            {" "}
            1 Apple Park Way Cupertino, California, United States.
          </li>
          <li class="white font-size-large px-1">
            Outer Ring Road, Devara Village, Bengaluru, Karnataka, India.
          </li>
        </ul>
      </div>
      <div class="white font-size-large bold-500 p-1">
        All rights reserved by <span class="red">CricKit</span> | Created by
        Ozair Khan
      </div>
    </footer>
  );
};

export default Footer;
