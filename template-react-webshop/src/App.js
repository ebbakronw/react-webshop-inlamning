import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout'

function App() {
  return (
    <div className="App">
      Webshop in React
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/products/:ebba" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    
    <Footer />
    
    </BrowserRouter>

    
    </div>
  );
}

export default App;
