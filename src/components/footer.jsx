import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Brand Name */}
        <div className="text-xl font-semibold">Wild Safari</div>

        {/* Center - Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="#home" className="hover:text-gray-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-400 transition duration-300">Gallery</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
          </li>
        </ul>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Wild Safari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
