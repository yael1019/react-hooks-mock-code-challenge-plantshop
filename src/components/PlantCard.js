import React, { useState, useEffect } from "react";

function PlantCard({ plant, patchPrice, handleDelete }) {
  // SET STATE FOR OUT OF STOCK PLANTS 
  const [outOfStock, setOutOfStock] = useState(false);
  // SET STATE FOR PRICE CHANGE 
  const [price, setPrice] = useState('');
  // FUNCTION TO TOGGLE OUTOFSTOCK
  const handleClick = () => setOutOfStock(!outOfStock)
  // FUNCTION TO RESET PRICE STATE
  const handlePriceChange = e => {
    setPrice(price2 => price2 = e.target.value)
  }
  // useEffect(() => {
  //   patchPrice(plant, price)
  // }, [price])
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <form onSubmit={() => patchPrice(plant, price)}>
        <input type="text" placeholder="New Price" name='price' value={price} onChange={handlePriceChange} />
      </form>
      {outOfStock ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>In Stock</button>
      )}
      <button onClick={() => handleDelete(plant.id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
