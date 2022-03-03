import React from 'react'
import '../styles/Checkout.css'


function Checkout({items}) {


  return (

  <>

 {
      items.map(item => (
           <table>
                <tr>
                <td><img src={item.url} alt='image' className='checkout-img'></img></td>
                <td><h1>{item.title}</h1></td>
                <td><h3>{item.price}</h3></td>
                </tr>
           </table>
      ))
 }



  <div className='checkout-box'>
   <div className='checkout-product'>
     
   </div>
   <div>
     <div className='checkout-header'>
       <h3>Back to Products</h3>
       </div>
     </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> Firstname</label>
         <input type="text" namn="firstname" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> Lastname</label>
         <input type="text" namn="lastname" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> Phone-number </label>
         <input type="text" namn="phone" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> City </label>
         <input type="text" namn="city" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> State</label>
         <input type="text" namn="state" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <label> Zip Code</label>
         <input type="text" namn="lastzipcode" className='form-control' />
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
    <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
            <img src="https://img.icons8.com/ios/50/000000/visa.png"/>
            <img src="https://img.icons8.com/fluency/48/000000/mastercard.png"/>
            <img src="https://img.icons8.com/ios/50/000000/amex.png"/>
    </div>
    </div>
    </div>
    </div>

    <div className='row'>
    <div className='checkout-container'>
         <button type='button' className='checkout-btn'> Place Order</button>
    </div>
    </div>
  
  </div>
  </>
  )
}
export default Checkout
