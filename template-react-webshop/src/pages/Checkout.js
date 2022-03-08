import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Checkout.css'
import {useEffect} from 'react'


function Checkout({items, sum}) {
     
     
     let content = (
         
          <div className='no-products'>
               <h4 className='no-products-text'>No products</h4>
               <Link to="/"><button className='home-checkout-btn'>Back</button></Link>
          </div> 
     )
     if (items.length >= 1) {
          content = (
               <div className='checkout-product-parent'>
                    <div className='cart-container'>
                    {items.map(item => (
                         <table className='checkout-info-parent'>
                              <tr className='checkout-info'>
                              <td><img src={item.url} alt='image' className='checkout-img'></img></td>
                              <td><h1 className='checkout-title'>{item.title}</h1></td>
                              <td><h3 className='checkout-price'>{item.price} SEK</h3></td>
                              </tr>
                         </table>
                    ))}
                    <div className='total-price'>Total price: {sum} SEK</div>
                    </div>

                    <div className='input-container'>
               
                         <label> Firstname</label>
                         <input type="text" namn="firstname" className='form-control' />
                    

                    
                         <label> Lastname</label>
                         <input type="text" namn="lastname" className='form-control' />
               

                    
                         <label> Phone-number </label>
                         <input type="text" namn="phone" className='form-control' />
                    

                    
                         <label> City </label>
                         <input type="text" namn="city" className='form-control' />
                    

                    
                         <label> State</label>
                         <input type="text" namn="state" className='form-control' />
                    

                    
                         <label> Zip Code</label>
                         <input type="text" namn="lastzipcode" className='form-control' />
                         
                         <div className='checkout-payments'>
                              <h3>Payment</h3>
                              <label for="fname">Accepted Cards</label>
                              <div className="icon-container">
                              <img src="https://img.icons8.com/ios/50/000000/visa.png"/>
                              <img src="https://img.icons8.com/fluency/48/000000/mastercard.png"/>
                              <img src="https://img.icons8.com/ios/50/000000/amex.png"/>
                         </div>
                         <div className='checkout-container'>
                              <button type='button' className='checkout-btn'> Place Order</button>
                         </div>
                         </div>
                    </div>
               </div>
              
          )
          
     }

     return (
          <div className='wrapper'>
               <div className='products-checkout'>
                    <h2 className='checkout-name'>CHECKOUT</h2>

                    {content}

               </div>
          </div>
         
     )
}

export default Checkout
