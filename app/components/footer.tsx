// import { FaFacebookSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaSkype } from "react-icons/fa6";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";


// // components/Footer.js  
// const Footer = () => {  
//   return (  
//     <footer className=" bg-indigo-950 text-white py-8">  
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-left">  
//         <div>  
//           <h2 className="text-lg font-bold mb-4">Menu</h2>  
//           <ul>  
//             <li><a href="#" className="text-gray-300 hover:text-white">New arrivals</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Best sellers</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Recently viewed</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Popular this week</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">All products</a></li>  
//           </ul>  
//         </div>  
//         <div>  
//           <h2 className="text-lg font-bold mb-4">Categories</h2>  
//           <ul>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Crockery</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Furniture</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Homeware</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Plant pots</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Chairs</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Crockery</a></li>  
//           </ul>  
//         </div>  
//         <div>  
//           <h2 className="text-lg font-bold mb-4">Our company</h2>  
//           <ul>  
//             <li><a href="#" className="text-gray-300 hover:text-white">About us</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Vacancies</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Contact us</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>  
//             <li><a href="#" className="text-gray-300 hover:text-white">Returns policy</a></li>  
//           </ul>  
//         </div>  
//         <div className="flex flex-row w-auto">  
//           <h2 className="text-lg font-bold mb-4">Join our mailing list</h2>  
//           <input  
//             type="email"  
//             placeholder="your@email.com"  
//             className="bg-gray-700 text-white w-auto p-2 "  
//           />  
//           <button className="bg-gray-500 text-white p-2 w-auto hover:bg-blue-600">Sign up</button>  
//         </div>  
//       </div>  
//       <div className="border-t border-gray-700 mt-4  ml-20  mr-20 gap-20 pt-4 flex flex-row ">  
//         <p className="text-gray text-sm  mi-20 flex text-right ">Copyright 2022 Avion LTD</p> 
//             <div className ="flex flex-row gap-5 text-white  text-left"><FaLinkedin /><FaFacebookSquare /> <FaInstagram /> <FaSkype /> <FaTwitterSquare /><FaPinterest /></div>

//       </div>  
//     </footer>  
//   );  
// };  

// export default Footer;


import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4  sm:px-12 md:px-28">
      <div className="mx-auto py-12">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand Section */}
          <div className="flex flex-col w-full  md:w-[320px] items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/Vector.png"
                alt="Comforty Logo"
                width={40}
                height={23.34}
                className="ml-3"
              />
              <span className="text-[#272343] text-[26px] font-bold">
                Comforty
              </span>
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/zubiafatima.zubiafatima.52?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/chandafatima-C%A3mylife-48475a27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/chandafatimamylife/profilecard/?igsh=MWo0OWN6b29xMmZsNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaPinterestP />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Category</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <a
                  href="http://localhost:3000/shop/12"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Sofa
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/shop/6"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Armchair
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/shop/9"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wing Chair
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/shop/5"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Desk Chair
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/shop/1"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wooden Chair
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/shop/11"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Support</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4 lg:w-[424px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Newsletter</h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center flex-wrap text-[#9A9CAA]  border-s-slate-200 border-t-2 pt-8">
          <p>
            © 2021 - Blogy - Designed & Developed by{" "}
            <a href="#" className="text-[#272343] hover:underline">
              Zakirsoft
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <FaCcMastercard size={40} />
            <FaPaypal size={40} />
            <FaCcAmex size={40} />
            <FaCcVisa size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}