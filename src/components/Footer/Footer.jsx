import React from "react";
import logo from "../../assets/images/logo.png";
import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="p-10 bg-[#2c3e50] flex flex-col sm:flex-row">
        <div className="sm:w-1/2 ">
          <div className="flex  items-center">
            <img src={logo} className="h-24" />
            <span className="text-2xl font-semibold font-raleway text-white">
              ZaikaBazzar
            </span>
          </div>
          <p className="font-lato p-2 text-gray-300 text-sm">
            ZaikaBazzar brings the rich flavors of India right to your doorstep.
            From traditional favorites to modern delights, we deliver fresh,
            authentic cuisine crafted with love. Discover a world of taste and
            convenience, all just a click away. Your next delicious meal is
            waiting!
          </p>
          <ul className="mt-5  flex items-center justify-around text-white">
            <li className="font-bold">Follow Us</li>
            <li className="text-2xl">
              <CiFacebook />
            </li>
            <li className="text-2xl">
              <CiLinkedin />
            </li>
            <li className="text-2xl">
              <CiYoutube />
            </li>
            <li className="text-xl">
              <BsTwitterX />
            </li>
          </ul>
        </div>
        <div className="flex justify-around sm:justify-end gap-10 mt-5 sm:mt-0 sm:w-1/2 items-right text-white font-lato p-3">
          <div className="">
            <h2 className="text-2xl ">Company</h2>
            <ul className="text-sm p-3">
              <li className="p-1">About Us</li>
              <li className="p-1">Delivery Information</li>
              <li className="p-1">Privacy Policy</li>
              <li className="p-1">Terms & Conditions</li>
              <li className="p-1">Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl ">Address</h2>
            <ul className="text-sm p-3">
              <li className="p-1">
                Street No. 123, ABC Road, New Delhi, India
              </li>
              <li className="p-1">+91 9999999999</li>
              <li className="p-1">info@zaikabazzar.com</li>
              <li className="p-1">9.00-19.00, Mon - Sat</li>
              <li className="p-1">9.00-19.00, Mon - Sat</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
