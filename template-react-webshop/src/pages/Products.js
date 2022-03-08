import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Products.css';

function Products({addProduct}) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://codexplained.se/cakes.php");
      const data = await response.json();
      setProducts(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (product) => {
    addProduct(product)
  }


  return (
    <div>
      <div className="cloud">
        <h1 className="title-shop">
          Cake House <br></br> Stockholm
        </h1>
      </div>
      {products.map((product) => (
        <article className="products-view" key={product.id}>
          <Link to={`/product/${product.id}`}>
            {" "}
            <img className="img-page" src={product.url} alt={product.title}></img>
          </Link>
          <div className="products-title">
            <h2 className="products-title-text">{product.title}</h2>
          </div>
          <div className="products-button">
            <h4 className="products-price">SEK {product.price}</h4>
            <button onClick={() => {handleClick(product)}} className="cart-btn">Add to Cart</button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Products;
