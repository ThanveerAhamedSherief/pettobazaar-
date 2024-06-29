import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6 fill-current text-white hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h11.07v-9.29H9.69v-3.62h3.15V8.41c0-3.11 1.9-4.81 4.67-4.81 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.3h3.59l-.47 3.62h-3.12V24h6.11c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0"></path></svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6 fill-current text-white hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.64 4.56c-.82.36-1.7.6-2.64.71.95-.57 1.68-1.48 2.02-2.56-.89.52-1.87.9-2.92 1.1-.84-.89-2.03-1.45-3.35-1.45-2.53 0-4.58 2.05-4.58 4.58 0 .36.04.7.12 1.03-3.8-.19-7.17-2.01-9.42-4.77-.39.67-.61 1.45-.61 2.28 0 1.57.8 2.96 2.02 3.77-.74-.02-1.43-.23-2.04-.57v.06c0 2.2 1.57 4.03 3.65 4.45-.38.1-.78.16-1.2.16-.29 0-.57-.03-.84-.08.57 1.78 2.23 3.07 4.19 3.11-1.53 1.2-3.46 1.91-5.56 1.91-.36 0-.71-.02-1.06-.06 1.98 1.27 4.34 2 6.87 2 8.25 0 12.76-6.84 12.76-12.76 0-.19-.01-.39-.02-.58.88-.63 1.64-1.42 2.25-2.32z"></path></svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6 fill-current text-white hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48v-1.72c-2.79.61-3.38-1.35-3.38-1.35-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.37 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02.8-.22 1.66-.33 2.52-.33s1.72.11 2.52.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.95.36.31.68.93.68 1.88v2.79c0 .27.18.57.69.47 3.96-1.33 6.82-5.07 6.82-9.48 0-5.5-4.46-9.96-9.96-9.96z"></path></svg>
              </a>
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