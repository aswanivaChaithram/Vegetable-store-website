import React from 'react';
import { useCart } from '../context/CartContext';

const ShopCart = () => {
  const { cart, dispatch } = useCart();
  const items = cart.items;
  const subtotal = items.reduce((sum, item) => sum + parseFloat(item.total), 0);
  const shipping = items.length > 0 ? 0.10 : 0;
  const total = items.length > 0 ? subtotal + shipping : 0;

  return (
    <div>
      <div className="bg-white text-gray-800 font-sans px-4 sm:px-6 py-10 lg:px-20">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-light">
            Basket <span className="text-lg text-gray-600 pl-2">
              {items.length} item{items.length !== 1 ? 's' : ''}
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-8">
          {/* Product Details */}
          <div className="lg:col-span-2 space-y-4 w-full md:w-[95%]">
            {items.length === 0 ? (
              <div className="text-gray-500 text-lg">Your basket is empty.</div>
            ) : (
              items.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-xl bg-gray-50 p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <img src={item.src} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-green-700 font-medium">${item.price} / lb</p>
                      <p className="mt-1 text-sm text-gray-600">{item.quantity} lb</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-medium mt-4 sm:mt-0">${item.total}</p>
                    <button
                      className="mt-2 text-red-600 text-xs hover:text-red-800 cursor-pointer"
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { name: item.name } })}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="border border-gray-200 rounded-xl bg-gray-50 p-6 shadow-md w-full md:w-[90%] mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Order summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              {/* Tax removed */}
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCart