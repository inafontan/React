import React from 'react';

export const ItemDetail = ({
  id,
  name,
  categoria,
  descripción,
  imgUrl,
  precio,
}) => {
  return (
    <div style={{
      border: 'solid purple 5px', margin: '10px', padding: '5px', marginLeft:'300px',
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
      boxShadow: ' 0 0.125rem 0.3125rem 0 rgba(2, 2, 0, 0.678)', width: '700px', height: '400px'}} >
        
      <img src={imgUrl} alt={`${id}-${name}`}
        style={{width: 'auto', height: '350px', marginTop: '20px'}}/>
      <div>
        <h1>{name}</h1>
        <p>  {categoria} </p>
        <p> <strong> {descripción}</strong></p>
        <h2>{precio}</h2>
      </div>
    </div>
  );
};
