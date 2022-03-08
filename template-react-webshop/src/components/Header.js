 import React, { useState } from 'react'
 import {Link} from 'react-router-dom'
 import {HiOutlineShoppingBag} from 'react-icons/hi';
import Cart from './Cart';
import '../styles/Header.css'


function Header({setItems, items, countCartItems, sum}) {
  
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='header'>
      <div className='header-top'>
      <div className='header-nav'>
        <Link to="/"><h3 className='header-nav-text'>Home</h3></Link> <Link to="/checkout"><h3 className='header-nav-text'>Checkout</h3></Link> 
      </div>
        <div className="header-menu"> 
          <button className='shop-btn' onClick={() => setOpen(!open)}>Test</button>
              {countCartItems ? (
                <button className='count-btn'>{countCartItems}</button>
              ) : 
                ''
              }
              </div>
      </div>
      <Cart setItems={setItems} 
            items={items}
            sum={sum}
            open = {open}
            setOpen = {setOpen}/>
    </div>
    </>
  )
}


export default Header 
