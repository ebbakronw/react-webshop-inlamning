import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Product() {
  const [cake, setCake] = useState({});
  const params = useParams();
  
  const fetchData = async () => {
    try {
    const response = await fetch('https://codexplained.se/cakes.php?id=234967');
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

  return (
    <div>
      
        <article key={cake.id}>
          <img src={cake.url} alt="picture of cake" /> 
          <p>{cake.title}</p>
          <p>{cake.price}</p>
          <p>{cake.description}</p>
          <p>{cake.storage}</p>
          <button>Add to Cart</button>
        </article>

    <h1>cake with id: {params.id}</h1>
    
    </div>
  )
  }


export default Product