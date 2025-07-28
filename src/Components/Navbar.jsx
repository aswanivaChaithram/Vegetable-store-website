import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import listIcon from '../assets/listIcon.svg';
import closeIcon from '../assets/closeIcon.svg';

const Navbar = () => {

  const navigate = useNavigate();
  const { cart } = useCart();
  const itemCount = cart.items.length;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}

      <header className="flex justify-between items-center px-6 lg:px-20 py-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex w-full items-center">
          {/* Logo left */}
          <Link to="/Vegetable-store-website">
            <h1 className="text-2xl font-semibold text-green-800 cursor-pointer">World Peas</h1>
          </Link>

          {/* Desktop nav links center/right */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium ml-auto">
            <a onClick={() => navigate('/Vegetable-store-website/products')} 
            className="hover:text-green-700 cursor-pointer">Shop</a>
            <a href="#about" className="hover:text-green-700">About Us</a>
            <a href="#" className="hover:text-green-700">My profile</a>
          </nav>

          {/* Basket button right */}
          <div className="flex items-center gap-2 sm:gap-6 ml-auto">
            <button className="bg-green-800 text-white hover:bg-green-700 cursor-pointer
             px-3 py-1 rounded flex items-center gap-2" onClick={() => navigate('/Vegetable-store-website/cart')}>
              Basket
              <span className="text-white text-xs font-bold ml-1 text-center">
                {itemCount > 0 ? itemCount : 0}
              </span>
            </button>
            {/* List Icon for sidebar toggle (only show list icon, never close icon here) */}
            {!sidebarOpen && (
              <button className="sm:hidden ml-2" onClick={() => setSidebarOpen(true)} aria-label="Open navigation menu">
                <img src={listIcon} alt="Open menu" className="w-7 h-7" />
              </button>
            )}
          </div>
        </div>

        {/* Sidebar for mobile nav links */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform 
          transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
          <div className="flex flex-col h-full p-6 pt-6 gap-6 relative">
            {/* Close icon inside sidebar */}
            <button className="absolute top-4 right-4" onClick={() => setSidebarOpen(false)} aria-label="Close navigation menu">
              <img src={closeIcon} alt="Close menu" className="w-7 h-7" />
            </button>
            <div className="pt-10 flex flex-col gap-6">
              <a onClick={() => {navigate('/Vegetable-store-website/products'); setSidebarOpen(false);}} className="hover:text-green-700 cursor-pointer">Shop</a>
              <a href="#about" className="hover:text-green-700" onClick={() => setSidebarOpen(false)}>About Us</a>
              <a href="#" className="hover:text-green-700" onClick={() => setSidebarOpen(false)}>My profile</a>
            </div>
          </div>
        </div>
        {/* No overlay when sidebar is open, so website background remains visible */}
      </header>
    </div>
  )
}

export default Navbar