import React, { useState, useEffect } from 'react';
import './Navbar.css';
import user from '../Assets/FoodCourt/user.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  // Close menu on route change or window resize (for responsiveness)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    const handleRoute = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handleRoute);
    document.body.addEventListener('click', handleRoute);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleRoute);
      document.body.removeEventListener('click', handleRoute);
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="navcont">
        {/* Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ fontSize: 28 }}>FOODCOURT</h1>
          </Link>
        </div>

        {/* Bottom row: Hamburger + Icons */}
        <div className="nav-bottom">
          {/* Hamburger */}
          {!menuOpen && (
            <button
              className="hamburger-btn"
              aria-label="Open menu"
              onClick={e => {
                e.stopPropagation();
                setMenuOpen(true);
              }}
              type="button"
            >
              <FaBars size={28} color="#fff" />
            </button>
          )}

          {/* Icons */}
          <div className="icons">
            <Link
              to="/cart"
              style={{
                textDecoration: 'none',
                marginRight: '1.2rem',
                position: 'relative'
              }}
            >
              <FaShoppingCart style={{ fontSize: 22, color: '#ffffffff' }} />
              <CartCountBadge count={cart.length} />
            </Link>
            <Link to="/access">
              <img src={user} alt="User Icon" />
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`menu${menuOpen ? ' show' : ''}`}
          onClick={e => e.stopPropagation()}
          style={{ pointerEvents: 'auto' }}
        >
          {menuOpen && (
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <FaTimes size={28} color="#fff" />
            </button>
          )}

          <ul className="list-item">
            <li><Link to="/about">AboutFC</Link></li>
            <li><Link to="/resturant">Restaurant</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Cart count badge
function CartCountBadge({ count }) {
  if (!count) return null;
  return (
    <span style={{
      position: 'absolute',
      top: -6,
      right: 2,
      background: '#e53935',
      color: '#fff',
      borderRadius: '50%',
      fontSize: 12,
      minWidth: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
      fontWeight: 700,
      zIndex: 2
    }}>{count}</span>
  );
}
