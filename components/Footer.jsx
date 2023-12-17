import React from "react";
import No from "./assets/no.png";
import Logo from "./assets/logo.png";
import Image from "next/image"
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerNavs = [
    {
      href: 'Biography',
      name: 'Biography'
    },
    
    {
      href: 'testimonials',
      name: 'Testimonials'
    },
    {
      href: 'journey',
      name: 'My Journey'
    },

  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image
        src={No}
        width={120}
        height={50} className="w-32 sm:mx-auto" alt="Logo" />

      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="hover:text-gray-800" key={idx}>
            <a href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 NoCodeWithChris All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
        <ul className="flex items-center space-x-4">
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <a href="https://twitter.com/foundertx">
            <FaTwitter className="svg-icon w-6 h-6 text-blue-400" />
          </a>
        </li>

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <a href="https://www.linkedin.com/in/christophermusamakombe/">
            <FaLinkedin className="svg-icon w-6 h-6 text-blue-500" />
          </a>
        </li>
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <a href="https://www.instagram.com/nocodewithchris/">
            <FaInstagram className="svg-icon w-6 h-6 text-red-600" />
          </a>
        </li>
      </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
