import React from 'react';
import { useCart } from '../Components/CartContext';
import CartItem from '../Components/CartItem';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, increase, decrease } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <>
      <div className="cart-page-enhanced">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <span className="cart-count">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
        </div>
        {cart.length === 0 ? (
          <div className="cart-empty">
            {/* <img src="/empty-cart.svg" alt="Empty Cart" className="cart-empty-img" /> */}
            <p>Your cart is empty. Start adding delicious meals!</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() => increase(item.id)}
                  onDecrease={() => decrease(item.id)}
                />
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>₦{total}</span>
              </div>
              <div className="cart-summary-row">
                <span>Delivery</span>
                <span>₦500</span>
              </div>
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>₦{total + 500}</span>
              </div>
              <button className="cart-checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;