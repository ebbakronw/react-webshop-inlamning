 import React, { useState } from 'react'
 import {Link} from 'react-router-dom'
 import {HiOutlineShoppingBag} from 'react-icons/hi';
import Cart from './Cart';


function Header({setItems, items, countCartItems, sum}) {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='header'>
      <div className='header-top'>
        <Link to="/"><h3 className='header-nav'>Home</h3></Link> 
        <div className="header-menu"> 
              {countCartItems ? (
                <button className='count-btn'>{countCartItems}</button>
              ) : 
                ''
              }
              <button className='shop-btn' onClick={() => {setOpen(true)}}><HiOutlineShoppingBag/></button>
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
