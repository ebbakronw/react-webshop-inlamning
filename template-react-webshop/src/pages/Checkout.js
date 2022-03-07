import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Checkout.css'


function Checkout({items, sum}) {


  return (

  <>
  <div className='wrapper'>
  <div className='products-checkout'>

       {items.length < 1 ? 
       <div className='no-products'>
            <h4 className='no-products-text'>No products</h4>
            <Link to="/"><button className='home-checkout-btn'>Back</button></Link>
       </div> 
       :
       <div className='products-description'>
           {
      items.map(item => (
           <table>
                <tr>
                <td><img src={item.url} alt='image' className='checkout-img'></img></td>
                <td><h1 className='checkout-title'>{item.title}</h1></td>
                <td><h3 className='checkout-price'>{item.price}</h3></td>
                </tr>
           </table>
      ))}
      <div className='total-price'>Total price: {sum}</div>


      <div className='input-container'>

<div className='checkout-container'>
     <label> Firstname</label>
     <input type="text" namn="firstname" className='form-control' />
</div>

<div className='checkout-container'>
     <label> Lastname</label>
     <input type="text" namn="lastname" className='form-control' />
</div>

<div className='checkout-container'>
     <label> Phone-number </label>
     <input type="text" namn="phone" className='form-control' />
</div>

<div className='checkout-container'>
     <label> City </label>
     <input type="text" namn="city" className='form-control' />
</div>

<div className='checkout-container'>
     <label> State</label>
     <input type="text" namn="state" className='form-control' />
</div>

<div className='checkout-container'>
     <label> Zip Code</label>
     <input type="text" namn="lastzipcode" className='form-control' />
</div>

</div>


<div className='checkout-payments'>
        <h3>Payment</h3>
        <label for="fname">Accepted Cards</label>
        <div class="icon-container">
        <img src="https://img.icons8.com/ios/50/000000/visa.png"/>
        <img src="https://img.icons8.com/fluency/48/000000/mastercard.png"/>
        <img src="https://img.icons8.com/ios/50/000000/amex.png"/>
</div>
</div>

<div className='checkout-container'>
     <button type='button' className='checkout-btn'> Place Order</button>
</div>
 </div>
}
 </div>
    

   
   
    </div>
  
 
 </>
  )
}
export default Checkout
