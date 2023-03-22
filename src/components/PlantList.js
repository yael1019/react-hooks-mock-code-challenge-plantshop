import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, search }) {
// FETCH DATA
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])
// FILTER THROUGH PLANTS ARRAY ACCORDING TO SEARCH
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
// MAP THROUGH PLANTS AND MAKE A PLANT CARD FOR EACH PLANT
  const displayPlants = filteredPlants.map(plant => <PlantCard key={ plant.id } plant={ plant } />)
  return (
    <ul className="cards">{ displayPlants }</ul>
  );
}

export default PlantList;
