import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../App';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <span>🌾</span>
          </div>
          <div className="brand-text">
            <h1>NVS Rice Mart</h1>
            <p>Premium Rice Since 2010</p>
          </div>
        </div>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>Rice Varieties</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Our Services</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <Link to="/cart" className={`nav-link cart-link ${isActive('/cart') ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
