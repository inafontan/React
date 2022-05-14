import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, categoria, name, imgUrl, precio}) => {
  return (
    <Link to={`/product/${id}`}>
       
      <div style={{
      border: 'solid purple 5px', margin: '10px', padding: '5px', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
        boxShadow: ' 0 0.125rem 0.3125rem 0 rgba(2, 2, 0, 0.678)', width: '250px', height: '250px'
      }}>
        
          <img src={imgUrl} alt={name} 
          style={{ width: '250px', height: '220px'}} />
        <span>{name}</span>
        <span>{precio}</span>
        </div>
      
    </Link>
  );
};
