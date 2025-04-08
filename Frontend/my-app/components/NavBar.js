'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  MdMenu,
  MdClose,
  MdArrowDropDown,
  MdArrowDropUp,
  MdPerson,
  MdDashboard,
  MdNotifications,
  MdHelp,
  MdLogout,
} from 'react-icons/md';
import { FaShoppingCart } from "react-icons/fa";
import '../app/styles.css'
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded token:', decoded);
        setUsername(decoded.username || 'User');
      } catch (err) {
        console.error('Invalid token', err);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <nav className="bg-red-300 text-white shadow-md w-full fixed mb-4 top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-3xl font-extrabold text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-pink-400"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>Parlor🍨</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="underline-link">HOME</Link>
          <Link href="/test" className="underline-link">FLAVORS</Link>
          <Link href="/" className="underline-link">CONTACT</Link>
          <Link href="/" className="underline-link">EXPLORE</Link>

          {isLoggedIn ? (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer space-x-2"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <span className="text-pink-600 font-semibold bg-white p-2 rounded-lg flex items-center">
                    {username}
                    {isProfileDropdownOpen ? <MdArrowDropUp className="ml-2" /> : <MdArrowDropDown className="ml-2" />}
                </span>
              </div>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg text-pink-600">
                  <Link href="/" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 hover:bg-pink-100">
                    <MdPerson className="inline-block mr-2" /> Profile
                  </Link>
                  <Link href="/" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 hover:bg-pink-100">
                    <FaShoppingCart className="inline-block mr-2" /> Shopping Carts
                  </Link>
                  <Link href="/" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 hover:bg-pink-100">
                    <MdDashboard className="inline-block mr-2" /> Dashboard
                  </Link>
                  <Link href="/" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 hover:bg-pink-100">
                    <MdNotifications className="inline-block mr-2" /> Notifications
                  </Link>
                  <Link href="/" onClick={() => setIsProfileDropdownOpen(false)} className="block px-4 py-2 hover:bg-pink-100">
                    <MdHelp className="inline-block mr-2" /> Help
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-pink-100"
                    onClick={handleLogout}
                  >
                    <MdLogout className="inline-block mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={handleLoginClick} className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition">
                Login
              </button>
              <button onClick={handleRegisterClick} className="bg-pink-300 text-white px-5 py-2 rounded-md hover:bg-pink-400 transition">
                Register
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-white focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-red-300 shadow-lg md:hidden flex flex-col items-center transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col w-full px-6 py-4 space-y-3">
            <div className="flex flex-row w-full justify-center space-x-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="underline-link">HOME</Link>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="underline-link">FLAVORS</Link>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="underline-link">CONTACT</Link>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="underline-link">EXPLORE</Link>
            </div>

            <hr />

            {isLoggedIn ? (
              <>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-pink-600">
                  <MdPerson /> <span>Profile</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-pink-600">
                  <FaShoppingCart /> <span>Shopping Carts</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-pink-600">
                  <MdDashboard /> <span>Dashboard</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-pink-600">
                  <MdNotifications /> <span>Notifications</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-pink-600">
                  <MdHelp /> <span>Help</span>
                </Link>
                <button className="w-full py-3 bg-red-500 text-white rounded-full hover:bg-red-600 mt-2 pb-2" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={handleLoginClick} className="bg-pink-500 text-white py-3 text-center rounded-full hover:bg-pink-600">
                  Login
                </button>
                <button onClick={handleRegisterClick} className="bg-pink-300 text-white py-3 text-center rounded-full hover:bg-pink-400">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;