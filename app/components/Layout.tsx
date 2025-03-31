import Navbar from './Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar 
      <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo 
          <Link href="/" className="text-xl font-bold hover:text-blue-300 transition-colors">
            AI Blogging Platform
          </Link>
    
          {/* Navigation Links *
          {/*
          <div className="flex space-x-4">
          <Link href="/blog/create" className="hover:text-blue-300 transition-colors">
             New
            </Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link hover:text-blue-300 transition-colors" href="/blog/create">Create</Link>
                        <Link className="nav-link hover:text-blue-300 transition-colors" href="/">Home</Link>
                        <Link className="nav-link hover:text-blue-300 transition-colors" href="/about">About</Link>
                        <Link className="nav-link hover:text-blue-300 transition-colors" href="/contact">Contact Us</Link>
                    </li>
                </ul>
          </div>
        </div>
      </nav>*/}

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} AI Blogging Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}