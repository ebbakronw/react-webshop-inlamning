import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import Product from './Product';

function Products() {
  const [cakes, setCakes] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cakes.php');
      const data = await response.json();
      console.log(data)
      setCakes(data);
    } 
    catch(error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <div>
        <div className="cloud">
          <h1 className='title-shop'>Cake House <br></br> Stockholm</h1>
        </div>
          {
            cakes.map(cakes => (
              <article className='articles' key={cakes.id}>
                <Link to={`/product/${cakes.id}`}> <img src={cakes.url} alt={cakes.title}></img></Link> 
                <div className='title'>
                  <h2 className='titleText'>{cakes.title}</h2>
                </div>
                <h4>{cakes.price} SEK</h4>
                <div className='buttons'>
                  <a href={`https://codexplained.se/cakes.php?id=${cakes.id}`}><button className='btns'>Read more</button></a>
                  <button className='btns'>Add to Cart</button>
                </div>
              </article>
            )
           )
         }

      </div>
  )
}

export default Products


