import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Navbar = () => {

  const navigate = useNavigate();
  const { cart } = useCart();
  const itemCount = cart.items.length;

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 lg:px-20 
      py-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <Link to="/"><h1 className="text-2xl font-semibold text-green-800
        cursor-pointer">World Peas</h1></Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a onClick={() => navigate('/products')} className="hover:text-green-700
          cursor-pointer">Shop</a>
          <a href="#about" className="hover:text-green-700">About Us</a>
          <a href="#" className="hover:text-green-700">My profile</a>
          <button className="bg-green-800 text-white hover:bg-green-700 cursor-pointer px-3 py-1 rounded flex items-center gap-2" onClick={() => navigate('/cart')}>
            Basket
            <span className="text-white text-xs font-bold ml-1 text-center">
              {itemCount > 0 ? itemCount : 0}
            </span>
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar