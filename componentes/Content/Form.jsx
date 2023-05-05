import { useState } from "react";
import './Form.css';
import Card from "./Card";
 const MyForm = () => {
  let [nombre, setNombre] = useState("");
  let [apellido, setApellido] = useState("");
  let [nacionalidad, setNacionalidad] = useState("");
  let [dni, setDni] = useState(0);
  let [edad, setEdad] = useState(0);
  //nacionalidad, dni, edad.
  const [personas, setPersonas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonas([{ nombre, apellido, nacionalidad, dni, edad}, ...personas]);
setNombre=("");
setApellido= ("");
setNacionalidad=("");
setEdad=("");
setDni=(""); 
    console.log(personas);
  };

  return (
    <>
      <form className="backgroundForm" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
  <label>Nacionalidad:</label>
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />

<label>Dni:</label>
        <input
          type="number"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
  <label>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
 <div>
 {personas.map((persona) => (
          <Card nombre={persona.nombre} apellido={persona.apellido} nacionalidad={persona.nacionalidad} dni={persona.dni} edad={persona.edad} />
        ))}
      </div>
    </>
  );
};
export default MyForm;