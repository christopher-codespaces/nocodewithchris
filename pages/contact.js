import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Import the correct React icons
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Me from "./assets/me.jpg";
import Image from "next/image";
import Head from 'next/head'


const Contact = () => {
  return (
    <>
    <Head>
        <title>
          {" "}
          Contact | Christopher
        </title>
        <meta
          name="description"
          content="A young entrepenuer taking charge of his dreams until he does.Contact Me."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <section className="min-h-screen bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Let’s talk
            </h1>

            <p className="mt-4 text-gray-500">
              Ask us everything and I would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <Image
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src={Me}
              width={800}
              height={80}
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FiMapPin className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-gray-700 truncate w-72">
                10 Robert Sobukwe Rd, Unclear, Cape Town, 7530
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <FiPhone className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-gray-700 truncate w-72">
                  +27 61 257 3431
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <FiMail className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-gray-700 truncate w-72">
                  nocodewithchris@gmail.com {` `}|{`  `}
                  christopher.swiftlybox@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8 mb-28">
              <h3 className="text-gray-600">Follow us</h3>

              <div className="mt-18 sm:mt-0">
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
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
