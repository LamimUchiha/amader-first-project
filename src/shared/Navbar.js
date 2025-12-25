import { useState } from "react";
import logo from "../images/Neuravixor logo 2.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass =
    "text-black hover:text-orange-500 transition-colors duration-200";

  return (
    <div className="navbar bg-white shadow-sm px-4 relative">

      {/* Left - Logo & Mobile Menu */}
      <div className="navbar-start">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>

        {/* Logo (no outline, no focus ring) */}
        <a
          href="/"
          className="btn btn-ghost normal-case focus:outline-none focus:ring-0 active:bg-transparent"
        >
          <img src={logo} alt="Neuravixor Logo" className="h-9 sm:h-10" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-lg xl:text-xl font-medium">
          <li><a className={navItemClass}>About Us</a></li>
          <li><a className={navItemClass}>Service</a></li>
          <li><a className={navItemClass}>Projects</a></li>
          <li><a className={navItemClass}>Social Media</a></li>
          <li><a className={navItemClass}>Achievement</a></li>
          <li><a className={navItemClass}>Contact Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="menu p-4 text-base sm:text-lg font-medium">
            <li><a className={navItemClass}>About Us</a></li>
            <li><a className={navItemClass}>Service</a></li>
            <li><a className={navItemClass}>Projects</a></li>
            <li><a className={navItemClass}>Social Media</a></li>
            <li><a className={navItemClass}>Achievement</a></li>
            <li><a className={navItemClass}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
