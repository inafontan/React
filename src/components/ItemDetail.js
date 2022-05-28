import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
 
const ItemDetail = ({ producto }) => {
  const { id, categoria, descripción, name, imgUrl, precio, stock } =
  producto;
  
  const [terminar, setTerminar] = useState(false);

  const onAdd = ( ) => {
    setTerminar(true);
  }

  return (
		<>
       
         <div style={{
        display: 'flex', flexDirection: 'column',
        width: '400px', height: 'auto',
        margin: '20px', marginTop: '20px', marginLeft: '350px',
        borderRadius: '10px', backgroundColor: 'white',
        boxShadow: '0px 1px 10px #000000',
        justifyContent: 'center', alignItems: 'center',
        padding: '10px', fontSize: '20px',
        fontWeight: 'bold', color: '#000000',
        textAlign: 'center', textDecoration: 'none',
        border: '2px solid #000000', borderRadius: '10px'
      }}>
        <img src={imgUrl} style={{ width: '300px', height: '250px', marginTop: '20px' }} />
        <h1 className="text-5xl font-bold">{name}</h1>
        
        <p className="py-6">Categoría: {categoria}</p>

        <p className="py-6">Detalles del producto: {descripción}</p>

        <p className="py-6">Cantidad disponible: {stock}</p>


        <div className="inline-block align-bottom mr-5">
          <span className="font-bold text-5xl leading-none align-baseline">
            Precio: ${precio}
          </span>
        </div>

          {terminar ? (
            <><Link to="/cart" className="btn bg-primary text-white btn-block ">
            Ir a comprar
          </Link>
            <Link to="/" className="btn bg-primary text-white btn-block ">  Seguir comprando </Link>  </>
          ) : (
            <ItemCount onAdd={onAdd} stock={producto.stock} id={id} />
            )}
             
        </div>
        </>
	)
}
      
export default ItemDetail