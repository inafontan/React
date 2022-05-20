import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {styleCards} from './Item.js';

const ItemDetail = ({ producto }) => {
  const { id, categoria, descripción, name, imgUrl, precio, stock } =
    producto;
  
  const [terminar, setTerminar] = useState(false);

  const onAdd = (count) => {
    setTerminar(true);
    console.log(count);
  }

  return (
		<>
			<div style={styleCards}>
        <img src={imgUrl} style={{ width: '300px', height: '250px', marginTop: '20px' }} />
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="py-6">{categoria}</p>
        <p className="py-6">{descripción}</p>
        <div className="inline-block align-bottom mr-5">
          <span className="font-bold text-5xl leading-none align-baseline">
            {precio}
          </span>
          {terminar ? (
            <Link to="/cart" className="btn bg-primary text-white btn-block ">
              Terminar Compra
            </Link>

          ) : (
            <ItemCount stock={stock} onAdd={onAdd} id={id} />
          )}
        </div>
      </div>
    </>
	)
}
      


export default ItemDetail
