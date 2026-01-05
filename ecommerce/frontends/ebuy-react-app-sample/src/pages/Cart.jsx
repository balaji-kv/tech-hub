
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './AmazonTheme.css';
import './Cart.css';
import { useCart } from '../CartContext';




const Cart = () => {
  const { cartItems, setCartItems, setCartCount } = useCart();


  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        (item.id || item.productId) === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(items => {
      const remaining = items.filter(item => (item.id || item.productId) !== id);
      const newCount = remaining.reduce((sum, it) => sum + (it.quantity || 0), 0);
      setCartCount(newCount);
      return remaining;
    });
  };


  const total = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <div className="amazon-main" style={{ maxWidth: 800, margin: '2rem auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2 style={{ color: '#232f3e', margin: 0 }}>Your Shopping Cart</h2>
          <button onClick={() => { setCartItems([]); setCartCount(0); }} style={{ background: '#b12704', border: 'none', color: '#fff', padding: '0.45rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Remove All</button>
        </div>
  {(!cartItems || cartItems.length === 0) ? (
          <div style={{ textAlign: 'center', color: '#555' }}>Your cart is empty.</div>
        ) : (
          <div className="cart-box">
            {cartItems.map(item => (
              <div key={item.id || item.productId} className="cart-item">
                <button className="remove-btn" onClick={() => handleRemove(item.id || item.productId)} aria-label={`Remove ${item.name}`}>Remove</button>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#232f3e' }}>{item.name}</h3>
                  <p style={{ color: '#B12704', fontWeight: 'bold', margin: '0.5rem 0' }}>₹{item.price ? item.price.toLocaleString() : ''}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id || item.productId, -1)} style={{ background: '#60cb76', border: 'none', borderRadius: '50%', width: 32, height: 32, fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}>-</button>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem', minWidth: 32, textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id || item.productId, 1)} style={{ background: '#60cb76', border: 'none', borderRadius: '50%', width: 32, height: 32, fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}>+</button>
                  </div>
                </div>
                <div className="cart-item-total">₹{((item.price || 0) * (item.quantity || 1)).toLocaleString()}</div>
              </div>
            ))}
            <div style={{ textAlign: 'right', marginTop: '2rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#232f3e' }}>
              Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items): ₹{total.toLocaleString()}
            </div>
            {/* <button
              style={{ background: '#FFA41C', border: 'none', padding: '0.8rem 2rem', borderRadius: '4px', cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '2rem', float: 'right' }}
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
