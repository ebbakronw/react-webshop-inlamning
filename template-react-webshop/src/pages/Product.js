import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css';


function Product({addProducts}) {
  const [cake, setCake] = useState({});
  const params = useParams();
  
  const fetchData = async () => {
    try {
    const response = await fetch('https://codexplained.se/cakes.php?id=' + params.id);
    const data = await response.json();
    console.log(data);
    
    setCake(data);
    
    } catch(error) {
     console.log(error);
    }
   
  }
    useEffect(() => {
     fetchData();
    }, []);

    const handleClick = (cake) => {
      addProducts(cake)
      console.log(handleClick)
    }

  return (
    <div className='cake-container'>
      
        <article key={cake.id}>
          <img className="product-image" src={cake.url} alt="cake" /> 

          <div className='product-info'>
             <p className='product-title'>{cake.title}</p>
             <p className='product-desc'>{cake.description}</p>
             <p className='product-price'>Price: {cake.price}</p> 
          </div>
          <div className='storage-container'>
             <p className='product-storage'>Storage: {cake.storage}</p>
             <button onClick={() => handleClick(cake)} className='toCart-btn'>Add to Cart</button>
          </div>
        </article>

    
    
    </div>
  )
  }


export default Product