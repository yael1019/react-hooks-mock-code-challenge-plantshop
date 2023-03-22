import React, { useState } from "react";

function PlantCard({ plant, patchPrice, handleDelete }) {
// SET STATE FOR OUT OF STOCK PLANTS 
  const [outOfStock, setOutOfStock] = useState(false);
// SET STATE FOR PRICE CHANGE 
  const [price, setPrice] = useState('');
// FUNCTION TO TOGGLE OUTOFSTOCK
  const handleClick = () => setOutOfStock(!outOfStock)
// FUNCTION TO RESET PRICE STATE
  const handlePriceChange = e => {
    console.log(`befor: ${price}`)
    setPrice(price => price = e.target.value)
    console.log(`after: ${price}`)
    patchPrice(plant, price)
  }
  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      <input type="text" placeholder="New Price" name='price' value={ price } onChange={ handlePriceChange } />
      {outOfStock ? (
        <button onClick={ handleClick }>Out of Stock</button>
      ) : (
        <button className="primary" onClick={ handleClick }>In Stock</button>
      )}
      <button onClick={ () => handleDelete(plant.id) }>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
