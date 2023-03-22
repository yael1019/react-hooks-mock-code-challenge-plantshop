import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, search }) {
// FETCH DATA
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])
// FUNCTION TO PATCH NEW PRICE
  const patchPrice = (plantA, price) => {
    fetch(`http://localhost:6001/plants/${plantA.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({price: price})
    })
      .then(resp => resp.json())
      .then(data => {
        setPlants(plants.map(plant => plant.id === plantA.id ? data : plant))
      })
  }
// FUNCTION TO DELETE PLANTS  
  const handleDelete = (plantID) => {
    fetch(`http://localhost:6001/plants/${plantID}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(() => setPlants(plants.filter(plant => plant.id !== plantID)))
  }
// FILTER THROUGH PLANTS ARRAY ACCORDING TO SEARCH
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
// MAP THROUGH PLANTS AND MAKE A PLANT CARD FOR EACH PLANT
  const displayPlants = filteredPlants.map(plant => <PlantCard key={ plant.id } plant={ plant } patchPrice={ patchPrice } handleDelete={ handleDelete } />)
  return (
    <ul className="cards">{ displayPlants }</ul>
  );
}

export default PlantList;
