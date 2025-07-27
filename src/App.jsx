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
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App