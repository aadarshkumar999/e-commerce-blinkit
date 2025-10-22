import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-6 text-center md:text-left">
        
        {/* Left Text */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} BlinkIt Clone. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300 text-xl">
          <a
            href="#"
            className="hover:text-blue-600 transition-transform transform hover:scale-125"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-transform transform hover:scale-125"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-transform transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
