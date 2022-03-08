import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import '../styles/Cart.css'

function Cart({items, setItems, open, setOpen, sum}) {

  return (
    <>
      <div className={open ? 'open home-cart-container' : 'home-cart-container'}>
        <div className='cart-header'>
          <h2 className="cart-opening">Cart</h2>
        </div>
        <div>{items.length === 0 && <h3 className='empty-cart'>Cart is currently empty. Add some cakes to start shopping!</h3>}</div>
        <div className="product-cart-container">
        {
            items.map((item) =>
              <CartItem
                key={item.id}
                items={items}
                item={item}
              />
            )
          }
        </div>


        <div className="cart-summary">
          <h3>Total: {sum} SEK</h3>
          <Link to="/checkout"><button className="cart-checkout" onClick = {() => setOpen(false)}>Checkout</button></Link>
        </div>
      </div> 
    </>
  );
}

export default Cart;
