import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <>
			<div className="container mx-auto flex flex-wrap gap-4 justify-center">
      {items?.map((producto) => (
        <Item key={producto.id} producto={producto}/>
      ))}
      </div>
    </>
  );
};

export default ItemList;
