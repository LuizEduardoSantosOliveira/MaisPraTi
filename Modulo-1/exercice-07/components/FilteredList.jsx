import React, { useState } from "react";

function FilteredList() {
  const names = [
    "Ana",
    "Carlos",
    "João",
    "Maria",
    "Lucas",
    "Fernanda",
    "Beatriz",
    "Eduardo",
    "lucas Prates",
    "luiz eduardo",
    "carlos miguel",
  ];

  const [filter, setFilter] = useState("");


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Nomes</h1>
      
      
      <input
        type="text"
        placeholder="Filtrar nomes..."
        value={filter}
        onChange={handleFilterChange}
      />
      
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
