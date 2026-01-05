
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import ProductSearch from './ProductSearch';
import './Header.css';

import ebuyLogo from '../assets/ebuy.png';
import cartImg from '../assets/images/cart.png';

const Header = ({ title, onSearch }) => {
  const { cartCount } = useCart();
  const handleSearch = (term, category) => {
    if (onSearch) onSearch(term, category);
  };
  return (
    <header className="amazon-header">
      <div className="header-left">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <img src={ebuyLogo} alt="eBuy Logo" />
        </Link>
      </div>

      <div className="header-center">
        <ProductSearch onSearch={handleSearch} />
        <Link to="/order" className="orders-btn">
          Orders
        </Link>
      </div>

      <div className="header-right">
        <Link to="/signin" style={{ display: 'none' }}>
          Sign in
        </Link>
        <Link to="/signin" style={{ display: 'none' }}>
          Sign out
        </Link>
        <div style={{ position: 'relative' }}>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#fff', display: 'inline-block', position: 'relative' }}>
            <img src={cartImg} alt="Cart" className="cart-img" />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#43d4c0', color: '#131921', borderRadius: '50%', padding: '2px 7px', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid #fff' }}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
