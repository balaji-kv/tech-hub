import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Landing.css';

import mobilephone from '../assets/images/mobilephone.png';
import laptop from '../assets/images/laptop.png';
import headphone from '../assets/images/headphone.png';
import ipad from '../assets/images/ipad.png';
import facecream from '../assets/images/facecream.png';
import lipstick from '../assets/images/lipstick.png';
import shampoo from '../assets/images/shampoo.png';
import caraccessories from '../assets/images/caraccessories.png';
import sofas from '../assets/images/sofas.png';
import toys from '../assets/images/toys.png';
import watches from '../assets/images/watch.png';
import recliner from '../assets/images/recliner.png';
import helicopter from '../assets/images/helicopter.png';
import gshock from '../assets/images/gshock.png';
import eyeliner from '../assets/images/eyeliner.png';
import delllaptop from '../assets/images/delllaptop.png';

const categories = [
  { name: 'Mobile Phones', image: mobilephone },
  { name: 'Laptops', image: laptop },
  { name: 'Headphones', image: headphone },
  { name: 'iPads', image: ipad },
  { name: 'Face Creams', image: facecream },
  { name: 'Lipsticks', image: lipstick },
  { name: 'Shampoo', image: shampoo },
  { name: 'Car Accessories', image: caraccessories },
  { name: 'Sofas', image: sofas },
  { name: 'Toys', image: toys },
  { name: 'Watches', image: watches },
  { name: 'Recliner', image: recliner },
  { name: 'Helicopter', image: helicopter },
  { name: 'G-Shock', image: gshock },
  { name: 'Eyeliner', image: eyeliner },
  { name: 'Dell Laptop', image: delllaptop }
];

const Landing = () => {
  return (
    <>
      <Header title="Welcome to eBuy" />
      <div className="ebuy-main">
        <div className="categories-grid">
          {categories.map(cat => (
            <div key={cat.name} className="category-card">
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="category-title">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
