import React, { useState } from 'react';
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-indigo-700 text-xl font-bold">PettoBazaar</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-indigo-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to='/' className="text-indigo-700 hover:text-gray-200">Home</Link>
          <Link to='/about' className="text-indigo-700 hover:text-gray-200">About</Link>
          {/* <Link href="#" className="text-indigo-700 hover:text-gray-200">Services</Link> */}
          <Link to='/contact' className="text-indigo-700 hover:text-gray-200">Contact</Link>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
      <div className={`fixed top-0 right-0 w-64 bg-indigo-700 h-full z-50 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4 space-y-4">
            <Link to='/' className="block text-white hover:text-gray-200" onClick={toggleMenu}>Home</Link>
            <Link to='/about' className="block text-white hover:text-gray-200" onClick={toggleMenu}>About</Link>
            {/* <a href="#" className="block text-white hover:text-gray-200">Services</a> */}
            <Link to='/contact' className="block text-white hover:text-gray-200" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;