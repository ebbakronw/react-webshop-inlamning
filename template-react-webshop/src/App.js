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

function App(){  
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState (0);
  const addProduct = (newItem) => {
    setItems([
      ...items,
      newItem
    ]);

    if (sum === 0) {
      setSum(newItem.price)
  } else {
      setSum(sum + newItem.price)
  }  

  }
  

  return (
    <div className="App">
      <BrowserRouter>
      <Header 
      items={items} 
      setItems={setItems}
      countCartItems={items.length} 
      sum={sum}/>
      


            
        <Routes>
            <Route path="/" element={<Products setSum={setSum} addProduct={addProduct}/>} />
            <Route path="/product/:id" element={<Product addProduct={addProduct}/>} />
            <Route path="/checkout" element={<Checkout items = {items} addProduct={addProduct}/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;