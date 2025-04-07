'use client'

import { FaFacebook, FaInstagram, FaArrowUp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import '../app/styles.css'

const Footer = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-red-300 to-red-600 text-white py-7 px-6 md:px-12 relative">
      {/* Circles */}
      <div className="absolute top-3 left-4 w-20 h-20 bg-yellow-300 rounded-full opacity-50  "></div>
      <div className="absolute bottom-4 right-2 w-28 h-28 bg-blue-300 rounded-full opacity-50 "></div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left gap-6 md:gap-12">
        {/* Logo and Name */}
        <div className="md:w-1/4 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">Name of parlor🍨</h2>
          <p className="text-sm italic mt-2 text-pink-100">Scoop up happiness, one bite at a time!</p>
        </div>

        {/* Navigation and Social Media */}
        <div className="md:w-2/4 flex flex-col items-center md:items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 font-medium">
            <Link href="/" className="underline-link">ABOUT US</Link>
            <Link href="/" className="underline-link">OUR SPECIALS</Link>
            <Link href="/test" className="underline-link">FULL MENU</Link>
            <Link href="/" className="underline-link">PROMOTIONS</Link>
            <Link href="/" className="underline-link">CONTACT US</Link>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-300 transition duration-300 hover:scale-110">
              <FaFacebook size={40} />
            </Link>
            <Link href="/" className="hover:text-pink-300 transition duration-300 hover:scale-110">
              <FaInstagram size={40} />
            </Link>
            <Link href="/" className="hover:text-black transition duration-300 hover:scale-110">
              <BsTwitterX size={40} />
            </Link>
          </div>
          <div className="flex gap-6 mt-6">
            <button
              onClick={toTop}
              className="flex items-center bg-white text-black font-medium py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration border-4 border-transparent hover:border-red-800"
            >
              <span className="mr-2">GO UP</span>
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Google Map integration */}
        <div className="md:w-1/4 flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-xl shadow-lg border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.760078235472!2d-79.346437524682!3d43.795482979098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b8c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSeneca%20Polytechnic%20Newnham%20Campus!5e0!3m2!1sen!2sca!4v1234567890"
              className="w-full h-[200px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-pink-300 pt-4 w-full text-pink-100">
        &copy; {new Date().getFullYear()} name of parlor. 
      </div>
    </footer>
  );
};

export default Footer;