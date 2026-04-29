
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import ProductSearch from './ProductSearch';
import { useAuth } from '../utils/authUtils';
import { useState } from 'react';

import ebuyLogo from '../assets/ebuy.png';
import cartImg from '../assets/images/cart.png';

const Header = ({ title, onSearch }) => {
  const { cartCount } = useCart();
  const { logout, getUserInfo, authenticated, login } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = getUserInfo();

  const handleSearch = (term, category) => {
    if (onSearch) onSearch(term, category);
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    logout();
  };
  return (
    <header className="amazon-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '2rem', textDecoration: 'none' }}>
          <img src={ebuyLogo} alt="eBuy Logo" style={{ height: '40px', width: 'auto', display: 'block' }} />
        </Link>
      </div>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <ProductSearch onSearch={handleSearch} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
        <Link to="/order" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', marginRight: '1.5rem', fontSize: '1.1rem', background: '#43d4c0', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Orders
        </Link>
        {authenticated && user ? (
          <div
            style={{ position: 'relative', marginRight: '1rem' }}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <div
              style={{
                background: '#43d4c0',
                color: 'black',
                padding: '0.5rem 1rem',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '120px',
                textAlign: 'center',
                userSelect: 'none',
              }}
            >
              {user.fullName || user.username || 'User'}
            </div>
            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  left: 0,
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  borderRadius: '4px',
                  zIndex: 10,
                  minWidth: '120px',
                }}
              >
                <button
                  onClick={handleSignOut}
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: 'none',
                    border: 'none',
                    color: '#232f3e',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            style={{ background: '#43d4c0', color: 'black', padding: '0.5rem 1rem', fontWeight: 'bold', marginRight: '1rem', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
            onClick={login}
          >
            Sign in
          </button>
        )}
        <div style={{ position: 'relative' }}>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#fff', display: 'inline-block', position: 'relative' }}>
            <img src={cartImg} alt="Cart" style={{ width: 38, height: 38, display: 'block', filter: 'invert(1) brightness(2)' }} />
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
