import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(){
  return (
    <footer className={` text-green-800 py-10 mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl mb-4 font-bold text-green-700">MindCare </Link>
            {/* <h3 className="text-xl font-bold ">MindCare</h3> */}
            <p className="text-sm text-gray-600">
              Supporting your mental health journey with empathy, care, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-green-700">Home</a></li>
              <li><a href="/about" className="hover:text-green-700">About Us</a></li>
              <li><a href="/service" className="hover:text-green-700">Services</a></li>
              <li><a href="/appointment" className="hover:text-green-700">Appointment</a></li>
              </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-600 mb-2">
              Email: <a href="mailto:info@mindcare.com" className="text-green-700">info@mindcare.com</a>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Phone: <span className="text-green-700">(555) 123-4567</span>
            </p>
            <div className="flex space-x-4 text-green-600 text-lg">
              <a href="#"><FaFacebookF className="hover:text-green-800" /></a>
              <a href="#"><FaTwitter className="hover:text-green-800" /></a>
              <a href="#"><FaInstagram className="hover:text-green-800" /></a>
              <a href="mailto:info@mindcare.com"><FaEnvelope className="hover:text-green-800" /></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t pt-6">
          &copy; {new Date().getFullYear()} MindCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
