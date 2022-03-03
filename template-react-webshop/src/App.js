import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Product from './pages/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App(){
  const [items, setItems] =useState([]);
    
    
  return (
    <div className="App">
      <BrowserRouter>
      <Header items={items}/>
      <Cart/>
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}
export default App;


/*APP*/ 