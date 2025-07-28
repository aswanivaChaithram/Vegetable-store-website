import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import ShopCart from './Components/ShopCart'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10"> 
        <Routes>
          <Route path="/Vegetable-store-website" element={<Home />} />
          <Route path="/Vegetable-store-website/products" element={<Products />} />
          <Route path="/Vegetable-store-website/cart" element={<ShopCart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App