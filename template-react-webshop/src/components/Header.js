import React from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';

function Header() {
  return (
    <div className='header'>
      <Link to="/">Home</Link> | <Link to="/checkout"><button><FaShoppingCart/></button></Link>
    </div>
  )
}

export default Header 

