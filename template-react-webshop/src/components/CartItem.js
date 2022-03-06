import React from 'react'

function CartItem({item}) {
  return (
    <div>
        <article className='cart-section' key={item.id}>
            <div className='cart-body'>
                 <img className='cart-img' src={item.url} alt={item.title}></img>
                <div className='cart-items'>
                    <h4 className='cart-title'>{item.title}</h4>
                    <h4 className='cart-price'>{item.price} sek</h4>
                </div> 
            </div>
        </article>


    </div>
  )
}

export default CartItem