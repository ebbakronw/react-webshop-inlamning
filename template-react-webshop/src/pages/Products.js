import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Products() {
  const [cakes, setCakes] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cakes.php');
      const data = await response.json();
      console.log(data)
      setCakes(data);
    } catch(error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <div>
          <h1>Cake House Stockholm</h1>
          {
            cakes.map(cakes => (
              <article key={cakes.id}>
                <img src={cakes.url} alt="Picture of cake"></img>
                <p>{cakes.title}</p>
                <p>{cakes.price}</p>
                <a href={`https://codexplained.se/cakes.php?id=${cakes.id}`}><button>Read more</button></a>
                <button>Add to Cart</button>
              </article>
            ))
          }

      </div>
  )
}

export default Products


