import React from 'react';
import './Card.css'; 
const Card = (props) => {
  return (
    <div className='cardStyle'>
        <h3> Nombre: {props.nombre} </h3> 
     <h3> Apellido: {props.apellido}  </h3>        
<h3>Nacionalidad: {props.nacionalidad} </h3> 
    <h3> Dni:{props.dni} </h3>
    <h3> Edad:{props.edad} </h3>  
    
    </div>
  );
};

export default Card;
