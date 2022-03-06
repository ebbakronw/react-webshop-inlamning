import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({items, open, sum}) {
  return (
    <>
      <div className='cart-container'>
        <div className='cart-header'>
          <h2 className="cart-title">Cart</h2>
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
          <Link to="/checkout"><button className="cart-checkout">Checkout</button></Link>
        </div>
      </div> 
    </>
  );
}

export default Cart;
