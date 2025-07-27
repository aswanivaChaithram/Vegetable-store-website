import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import { assets } from '../assets/assets';

const Products = () => {

  const { dispatch } = useCart();
  
  return (
    <div className="bg-white text-gray-800 font-sans px-4 sm:px-6 lg:px-20
     py-10">
      {/* Products Heading */}
      <h1 className="text-4xl md:text-5xl font-light mb-8">Products</h1>

      {/* Product Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((item, index) => {

          const [weight, setWeight] = useState('');
          const [added, setAdded] = useState(false);

          const handleAdd = () => {
            const qty = parseFloat(weight);
            if (qty > 0) {
              dispatch({
                type: 'ADD_TO_CART',
                payload: {
                  name: item.name,
                  price: item.price,
                  src: item.src,
                  quantity: qty,
                  total: (item.price * qty).toFixed(2),
                },
              });
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }
          };

          return (
            <div
              key={index} className="rounded-xl overflow-hidden shadow-xl"
            >
              <img src={item.src} alt={item.name} className="w-full h-60 
              object-contain" />
              <div className="p-4 bg-gray-50">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-green-700 font-medium mb-1">${item.price} / lb</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
                <input
                  type="number" min="0" step="0.1" className="mt-2 mb-2 p-2 border-none 
                  outline-none rounded w-full shadow-[4px_4px_4px_rgba(0,0,0,0.2)]"
                  placeholder="Enter weight (lb)" value={weight} onChange=
                  {e => setWeight(e.target.value)}
                />
                <div className="flex items-center gap-2 mt-4">
                  <button
                    className='bg-green-800 p-2 rounded-lg cursor-pointer text-white'
                    onClick={handleAdd}
                  >
                    Add to Basket
                  </button>
                  {added && (
                    <div className="text-green-700 font-semibold text-sm">Item is added</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Products