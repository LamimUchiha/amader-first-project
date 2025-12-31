import React from "react";
import logo from "../images/Neuravixor logo 2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* ===== Company Info ===== */}
        <div>
          <img src={logo} alt="Neuravixor Logo" className="h-8 mb-4" />
          <p className="text-sm leading-relaxed">
            Neuravixor delivers intelligent digital solutions combining
            web development, e-commerce, and AI automation to empower
            modern businesses.
          </p>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>E-commerce Solutions</li>
            <li>AI Automation</li>
            <li>Custom AI Models</li>
            <li>AI Web Integration</li>
          </ul>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-4">Quick Links</h6>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
            <li className="hover:text-orange-400 cursor-pointer">Projects</li>
            <li className="hover:text-orange-400 cursor-pointer">Achievements</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-4">Contact</h6>
          <ul className="space-y-2 text-sm">
            <li>Email: info@neuravixor.com</li>
            <li>Phone: +880-XXXXXXXXX</li>
            <li>Location: Bangladesh</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a className="hover:text-orange-400 cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
              </svg>
            </a>
            <a className="hover:text-orange-400 cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246..." />
              </svg>
            </a>
            <a className="hover:text-orange-400 cursor-pointer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Neuravixor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
