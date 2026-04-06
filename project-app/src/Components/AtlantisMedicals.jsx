import React, { useEffect, useState } from 'react';
import './AtlantisMedicals.css';

const FoodCourt = () => {
  // Cart state: [{id, name, price, quantity, image}]
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });
  const [showCart, setShowCart] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cart]);

  const adjustQuantity = (id, change) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      ).filter(item => item.quantity > 0);
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    window.location.href = '/checkout';
  };

  return (
    <div className="foodcourt-main">
      <header className="foodcourt-header">
        <div className="logo">
          <a href="/">
            <img src={require('../Assets/FoodCourt/android-chrome-512x512.png')} alt="FoodCourt Logo" />
          </a>
          <h1 className="sea">
            <a href="/">Food <span className="color">Court</span></a>
          </h1>
        </div>
        <nav className="foodcourt-navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="#cart" onClick={e => { e.preventDefault(); setShowCart(true); }}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {showCart && (
        <section className="cart-section">
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-details">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>NGN {item.price.toLocaleString()} - Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-actions">
                    <button className="decrease-btn" onClick={() => adjustQuantity(item.id, -1)}>-</button>
                    <button className="increase-btn" onClick={() => adjustQuantity(item.id, 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <h3>Total: NGN <span className="total-price">{totalPrice.toLocaleString()}</span></h3>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </section>
      )}

      <footer className="foodcourt-footer">
        <div className="footer-content">
          <div>
            <h1><span className="f1">About</span> <span className="f2">Us</span></h1>
            <p>At FoodCourt, we are dedicated to providing innovative food solutions that combine cutting-edge technology with compassionate service. Our team of experts is committed to improving the lives of our customers and advancing the field of food service.</p>
          </div>
          <div>
            <h1><span className="f1">Contact</span> <span className="f2">Us</span></h1>
            <p>35 Crossroad, Abuja</p>
            <p>+234 765 87</p>
            <p>underthesea.com</p>
          </div>
          <div>
            <h1><span className="f1">Quick</span> <span className="f2">Link</span></h1>
            <a href="/">Home</a><br />
            <a href="/shop">Shop</a><br />
            <a href="#cart" onClick={e => { e.preventDefault(); setShowCart(true); }}>Cart</a><br />
            <a href="/features">About us</a><br />
            <a href="/events">Events</a><br />
            <a href="/contact">Contact Us</a>
          </div>
          <div>
            <h1><span className="f1">Newsletter</span> <span className="f2">Now</span></h1>
            <div>
              <input type="text" placeholder="Your email" />
              <button>&#x2713;</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; all rights reserved
        </div>
      </footer>
    </div>
  );
};

export default FoodCourt;
