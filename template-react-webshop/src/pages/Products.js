import React, { useState, useEffect } from 'react'

function Products() {
  const [cakes, setCakes] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cakes.php');
      const data = await response.json();
      console.log(data);

      setCakes(data);
    } catch(error) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <div>
          <h1>Cakes</h1>
          {
            cakes.map(cakes => (
              <article key={cakes.id}>
                <img src={cakes.url} alt="Picture of cake"></img>
                <p>{cakes.title}</p>
                <p>{cakes.price}</p>
                <button href="">Read more</button>
                <button>Add to cart</button>
              </article>
            ))
          }

      </div>
  )
}

export default Products


