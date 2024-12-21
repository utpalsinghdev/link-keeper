import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-8 ">
      <div className="container mx-auto px-6z flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold text-blue-900">Link-Keeper</h1>
          <p className="text-sm text-gray-400">
            Your favorite link management tool
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8"></div>

        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://youtube.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaYoutube size={24} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>&copy; 2024 Link-Keeper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
