import React, { useState } from 'react';
import Carousel from './components/carousel//Carousel';
import './App.css';

const CATEGORIES = {CRYPTO: 'crypto', FIAT: 'fiat'};
const crypto = [
  {
    path: '/images/crypto/bitcoin.jpg',
    text: 'bitcoin',
    price: 4175788
  },
  {
    path: '/images/crypto/ethereum.jpg',
    text: 'ethereum',
    price: 164335
  },
  {
    path: '/images/crypto/ripple.jpg',
    text: 'ripple',
    price: 100
  },
  {
    path: '/images/crypto/litecoin.jpg',
    text: 'litecoin',
    price: 20399
  },
  {
    path: '/images/crypto/dogecoin.jpg',
    text: 'dogecoin',
    price: 25
  }
];

const fiat = [
  {
    path: '/images/fiat/usd.jpg',
    text: 'usd',
    price: 74.54
  },
  {
    path: '/images/fiat/inr.jpg',
    text: 'inr',
    price: 1
  },
  {
    path: '/images/fiat/euro.jpg',
    text: 'euro',
    price: 89.27
  },
  {
    path: '/images/fiat/pound.jpg',
    text: 'pound',
    price: 103.12
  },
  {
    path: '/images/fiat/baht.jpg',
    text: 'baht',
    price: 2.39
  }
];


const App = () => {
  const [category, setCategory] = useState(CATEGORIES.CRYPTO);

  const images = {
    [CATEGORIES.CRYPTO]: crypto,
    [CATEGORIES.FIAT]: fiat
  }

  const changeSelection = e => {
    const selected = e.target.value;
    setCategory(selected);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span>Select Category:</span>
          <select onChange={changeSelection}>
            <option value={CATEGORIES.CRYPTO}>Crypto</option>
            <option value={CATEGORIES.FIAT}>Fiat</option>
          </select>
        </p>
      </header>
      <main>
        <Carousel images={images[category]} />
      </main>
    </div>
  );
}

export default App;
