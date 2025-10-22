import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-6 text-center md:text-left">
        
        {/* Left Text */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} BlinkIt Clone. All Rights Reserved.
          </p>

          {/* Made with Love */}
          <p className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
            <span className="mx-1 hidden md:inline">|</span> {/* divider for desktop */}
            Made with{" "}
            <Heart
              className="w-4 h-4 text-red-500 mx-1 animate-pulse"
              fill="currentColor"
            />{" "}
            by{" "}
            <a
              href="https://webboyaadarsh.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
            >
              Aadarsh
            </a>
          </p>
        </div>

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
