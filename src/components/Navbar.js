import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-yellow-500 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-extrabold text-black tracking-wide">
          <span className="text-white bg-black px-2 py-1 rounded">CHAI</span> PARATHA LOUNGE
        </h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black hover:text-white transition duration-300">Home</Link>
          <Link to="/about" className="text-black hover:text-white transition duration-300">About</Link>
          <Link to="/chef" className="text-black hover:text-white transition duration-300">Chef</Link>
          <Link to="/contact" className="text-black hover:text-white transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-yellow-500">
          <Link to="/" className="block text-black hover:text-white transition duration-300 py-2 px-4" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block text-black hover:text-white transition duration-300 py-2 px-4" onClick={toggleMenu}>About</Link>
          <Link to="/chef" className="block text-black hover:text-white transition duration-300 py-2 px-4" onClick={toggleMenu}>Chef</Link>
          <Link to="/contact" className="block text-black hover:text-white transition duration-300 py-2 px-4" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;