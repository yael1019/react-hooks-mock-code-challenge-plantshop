import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
// SET STATE FOR PLANTS ARRAY
  const [plants, setPlants] = useState([]);
// SET STATE FOR PLANT FORM
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: ''
  })
// SET STATE FOR SEARCH
  const [search, setSearch] = useState('');
// FUNCTION TO POST NEW PLANT
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(data => setPlants([...plants, data]))
    setForm({
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <main>
      <NewPlantForm form={ form } setForm={ setForm } handleSubmit={ handleSubmit } />
      <Search setSearch={ setSearch } search={ search } />
      <PlantList plants={ plants } setPlants={ setPlants } search={ search } />
    </main>
  );
}

export default PlantPage;
