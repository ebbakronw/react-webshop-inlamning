import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
