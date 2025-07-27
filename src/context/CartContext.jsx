import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Get initial state from localStorage if available
const getInitialState = () => {
  const stored = localStorage.getItem('cart');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { items: [] };
    }
  }
  return { items: [] };
};

// Cart reducer to handle actions
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (existingIndex !== -1) {
        // Update quantity if item exists
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      }
      // Add new item
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload.name),
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }
    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using cart context
export function useCart() {
  return useContext(CartContext);
}
