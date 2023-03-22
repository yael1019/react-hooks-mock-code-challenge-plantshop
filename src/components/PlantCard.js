import React, { useState } from "react";

function PlantCard({ plant }) {
// SET STATE FOR OUT OF STOCK PLANTS 
  const [outOfStock, setOutOfStock] = useState(false);
// FUNCTION TO TOGGLE OUTOFSTOCK
  const handleClick = () => setOutOfStock(!outOfStock)
  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      {outOfStock ? (
        <button onClick={ handleClick }>Out of Stock</button>
      ) : (
        <button className="primary" onClick={ handleClick }>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
