import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Product from './pages/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App(){
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState (0);
  
  const addProducts = (newItem) => {

    setItems ([
      ...items,
      newItem
    ])
    if (sum === 0) {
      setSum(newItem.price)
  } else {
      setSum(sum + newItem.price)
  }

  }
    
    
  return (
    <div className="App">
      <BrowserRouter>
      <Header items={items}/>
      <Cart/>
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/product/:id" element={<Product addProducts={addProducts}/>} />
            <Route path="/checkout" element={<Checkout items={items} sum={sum}/>} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}
export default App;


/*APP*/ 