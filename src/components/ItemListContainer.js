import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data/data';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState();

  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {

        const myData = catId
          ? productos.filter((item) => item.categoria === catId)
          : productos;

        resolve(myData);
      }, 500);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <h2>Cargando</h2>
  ) : (
      <>
         
      <h3 style={{ textAlign: 'left'}}>{greeting}</h3>
          <ItemList items={items} />
         
    </>
  );
};

export default ItemListContainer;