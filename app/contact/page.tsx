"use client"

import { GoVerified } from "react-icons/go";

import { BsTrophy } from "react-icons/bs";

import { MdSupportAgent } from "react-icons/md";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";



const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const Page = () => {
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("Your message has been sent successfully! We will get back to you shortly.");
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6">
      <h1 className="font-semibold text-4xl text-center sm:text-3xl text-gray-800">
        Get In Touch With Us
      </h1>

      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
        For more information about our products & services, please feel free to
        drop us an email. Our staff is always here to help you out. Don't
        hesitate!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
        {/* Contact Info Section */}
        <div className="flex flex-col space-y-8 px-6 sm:px-10">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium text-gray-800`}>
                Address
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhone className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium text-gray-800`}>
                Phone
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Mobile: (808) 555-0111 <br /> Hotline: (808) 555-0111
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black h-[27.59px] mt-1" />
            <div>
              <h2 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium text-gray-800`}>
                Working Time
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Monday - Friday: 9:00 AM - 10:00 PM <br />
                Saturday - Sunday: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" className="text-gray-800 hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-800 hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-800 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 w-full sm:w-[635px] rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium text-gray-800`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4 mt-8">
              <label
                htmlFor="email"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium text-gray-800`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4 mt-8">
              <label
                htmlFor="subject"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium text-gray-800`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8 mt-8">
              <label
                htmlFor="message"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium text-gray-800`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about..."
                className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3 hover:bg-[#027f94] transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Success/Error Message */}
          {formStatus && (
            <div className="mt-6 text-center text-lg font-semibold text-green-600">
              {formStatus}
            </div>
          )}
        </div>
      </div>


       <div className="w-full max-w-screen-xl h-auto bg-[#F4F4F4] flex flex-wrap items-center justify-between px-8 py-6 mt-10">
            <div className="flex items-center space-x-4 mb-6 sm:mb-0">
              <BsTrophy className="w-[52.77px] h-[60px] text-black" />
              <div>
                <h2
                  className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}
                >
                  High Quality
                </h2>
                <p
                  className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}
                >
                  crafted from top materials
                </p>
              </div>
            </div>
      
            <div className="flex items-center space-x-4 mb-6 sm:mb-0">
              <GoVerified className="w-[60px] h-[60px] text-black" />
              <div>
                <h2
                  className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}
                >
                  Warranty Protection
                </h2>
                <p
                  className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}
                >
                  Over 2 years
                </p>
              </div>
            </div>
      
            <div className="flex items-center space-x-4 mr-6">
              <MdSupportAgent className="w-[52.77px] h-[60px] text-black" />
              <div>
                <h2
                  className={`${poppins.className} font-semibold text-[20px] sm:text-[25px]`}
                >
                  24 / 7 Support
                </h2>
                <p
                  className={`${poppins.className} font-medium text-[16px] sm:text-[20px] text-[#898989]`}
                >
                  Dedicated support
                </p>
              </div>
            </div>
          </div>

      {/* Google Maps Embed */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Find Us On The Map</h2>
      
        <iframe
  className="w-full h-[400px] rounded-lg"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232412.2288501164!2d67.0427!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8b575cfebf%3A0xa0f66d0c8b1e93f!2sKarachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1649246585962!5m2!1sen!2s"
  allowFullScreen=""
  loading="lazy"
/>

      </div>


    </div>

    
  );
};

export default Page;
