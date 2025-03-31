'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-blue-300 transition-colors"
          aria-label="Home"
        >
          AI Blogging Platform
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-4 mt-4 md:mt-0`}
        >
          <Link
            href="/blog/create"
            className="block md:inline hover:text-blue-300 transition-colors"
            aria-label="Create New Blog"
            onClick={()=>setIsOpen(false)}
          >
            Create Blog
          </Link>
          <Link
            href="/"
            className="block md:inline hover:text-blue-300 transition-colors"
            aria-label="Home"
            onClick={()=>setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block md:inline hover:text-blue-300 transition-colors"
            aria-label="About Us"
            onClick={()=>setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block md:inline hover:text-blue-300 transition-colors"
            aria-label="Contact Us"
            onClick={()=>setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
