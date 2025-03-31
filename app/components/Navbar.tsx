'use client';
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-xl font-bold hover:text-blue-300 transition-colors"
//           aria-label="Home"
//         >
//           AI Blogging Platform
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>

//         {/* Navigation Links */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:space-x-4 mt-4 md:mt-0`}
//         >
//           <Link
//             href="/blog/create"
//             className="block md:inline hover:text-blue-300 transition-colors"
//             aria-label="Create New Blog"
//             onClick={()=>setIsOpen(false)}
//           >
//             Create Blog
//           </Link>
//           <Link
//             href="/"
//             className="block md:inline hover:text-blue-300 transition-colors"
//             aria-label="Home"
//             onClick={()=>setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="block md:inline hover:text-blue-300 transition-colors"
//             aria-label="About Us"
//             onClick={()=>setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/contact"
//             className="block md:inline hover:text-blue-300 transition-colors"
//             aria-label="Contact Us"
//             onClick={()=>setIsOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Using Font Awesome icons

// interface NavLink {
//   label: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   { label: 'Create Blog', href: '/blog/create' },
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Contact', href: '/contact' },
// ];

// const Navbar: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false); // Close menu on larger screens
//       }
//     };

//     // Initial check
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Left Side - AI Blogging Platform Link */}
//         <Link href="/" className="text-xl font-semibold text-white-800">
//           AI Blogging Platform
//         </Link>

//         {/* Right Side - Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <Link key={link.label} href={link.href} className="text-white-700 hover:text-white-900">
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white-700 hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-gray-500">
//             {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Hidden by default) */}
//       {isMobile && isMenuOpen && (
//         <div className="bg-blue-600 text-white py-2 px-4 mt-2 rounded-md shadow-md">
//           <div className="flex flex-col space-y-3">
//             {navLinks.map((link) => (
//               <Link key={link.label} href={link.href} className="block text-white-700 hover:text-blue-700 py-2">
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Create Blog', href: '/blog/create' },
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side - AI Blogging Platform Link */}
        <Link href="/" className="text-xl font-semibold hover:text-blue-200">
          AI Blogging Platform
        </Link>

        {/* Right Side - Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-blue-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isMobile && isMenuOpen && (
        <div className="bg-blue-500 py-2 px-4 mt-2 rounded-md shadow-md">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block hover:text-blue-300 py-2"
                onClick={closeMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;