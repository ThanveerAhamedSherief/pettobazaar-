import React from 'react';
import { Link } from 'react-router-dom';
import Instagran from '../assets/instagram.svg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  const handleFaceBookClick = (event) => {
    event.preventDefault();
    window.open('https://www.facebook.com/share/s3S7ysicPk97uujb/?mibextid=qi2Omg', '_blank');
  };
  const handleInstaClick = (event) => {
    event.preventDefault();
    window.open('https://www.instagram.com/pettobazaar?igsh=MWNwODh0eHFmbWszdw==', '_blank');
  };
  return (
    <footer className="bg-indigo-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-white">
              We are passionate about pets and committed to providing the best care and products for your furry friends.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-white">
              <li><Link to='/' className="hover:text-white">Home</Link></li>
              <li><Link to='/about' className="hover:text-white">About</Link></li>
              <li><Link to='/contact' className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
             <Link to="" onClick={handleInstaClick}>
             <FaInstagramSquare className='w-6 h-6 fill-current text-white'/>
             </Link>
             <Link to="" onClick={handleFaceBookClick}>
             <FaFacebook className='w-6 h-6 fill-current text-white'/>
             </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-8">
          &copy; {new Date().getFullYear()} PettoBazaar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;