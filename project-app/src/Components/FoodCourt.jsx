import React, { useEffect, useState } from 'react';
import './FoodCourt.css';

const FoodCourt = () => {
  // Cart state: [{id, name, price, quantity, image}]
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cart]);

  return null; // This component will only be used for the cart page
};

export default FoodCourt;
