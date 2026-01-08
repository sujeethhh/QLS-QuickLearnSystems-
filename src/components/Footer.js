"use client";
import React, { useState } from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaPaypal, FaUniversity } from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      comment: ""
    });
  };

  return (
    <footer className="bg-[#4C0519] text-white ">
      <div className="w-full px-6 sm:px-10 lg:px-30 py-12 sm:py-16 ">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

          
          {/* Popular Courses - Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ITL4Management" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  ITIL 4 Foundation
                </Link>
              </li>
              <li>
                <Link href="/PScrumM1" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Professional Scrum Master
                </Link>
              </li>
              <li>
                <Link href="/LeadingSAFeAgilist" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  SAFe Agile 5
                </Link>
              </li>
              <li>
                <Link href="/PMP" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  PMP Certification
                </Link>
              </li>
              <li>
                <Link href="/Prince2Foundation" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Prince2 Foundation
                </Link>
              </li>
              <li>
                <Link href="/Prince2Practitioner" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Prince2 Practitioner
                </Link>
              </li>
              <li>
                <Link href="/LeanSSGB" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Lean Six Sigma Green Belt
                </Link>
              </li>
              <li>
                <Link href="/DevopsFoundation" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  DevOps Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact - Column 2 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/Events" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/quicklearn-professional-brochure.html" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Corporate Brochure
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block">
                  Contact Us
                </Link>
              </li>
            </ul>
<div/>
            {/* Payment Options */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Payment Options</h3>
              <p className="text-gray-300 text-sm mb-4">Cash, Cheque, Online Transfer & Credit Cards</p>
              <div className="flex gap-2 flex-wrap">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <SiVisa className="w-8 h-5 text-[#9F2D2D]" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <SiMastercard className="w-8 h-5 text-red-500" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <FaUniversity className="w-5 h-4 text-gray-700" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm">
                  <FaPaypal className="w-6 h-4 text-[#9F2D2D]" />
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Us - Column 3 */}
          <div >
            <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.facebook.com/quicklearnsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#9F2D2D] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com/quicklearnsys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Google Plus"
              >
                <FaGooglePlusG className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/quicklearn-systems-1494ba12a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <span className="block font-semibold text-white mb-1">Email:</span>
                  <a href="mailto:info@quicklearnsys.com" className="hover:text-white transition-colors">
                    info@quicklearnsys.com
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-white mb-1">Phone:</span>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-white mb-1">Address:</span>
                  <span className="block">QuickLearn Systems</span>
                  <span className="block">Training Center</span>
                </li>
              </ul>
            </div>
          </div>


        </div>
        {/* Disclaimer */}
<div className="border-t border-gray-300 mt-10 pt-6">
  <h4 className="text-sm font-semibold text-gray-200 mb-2">
    DISCLAIMER
  </h4>
  <p className="text-gray-400 text-xs leading-relaxed max-w-4xl">
    All trademarks, service marks, and registered trademarks mentioned herein the website
    are the property of their respective owners.
    <br />
    Any potential violation may be reported to{" "}
    <a
      href="mailto:info@quicklearnsys.com"
      className="text-gray-300 hover:text-white underline"
    >
      info@quicklearnsys.com
    </a>{" "}
    for correction.
  </p>
</div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2018-2025 QuickLearn Systems. All Rights Reserved. The certification names are the trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
