import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return <div style={{
      border: 'solid purple 5px', margin: '10px', padding: '5px', width: '250px', height: '300px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      boxShadow: ' 0 0.125rem 0.3125rem 0 rgba(2, 2, 0, 0.678)'}}>
      <img src={item.imgUrl}/>
      <h1> <strong> {item.name}</strong></h1>
      <h2> <strong> {item.precio}</strong></h2>
    </div> 
    }