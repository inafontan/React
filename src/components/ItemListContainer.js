import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";  
import { info } from "../info/info";
import Loading from "./Loading";


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setItems(info);
      setIsLoading(false);
    }, 1000);
    

    const getItems = new Promise((resolve) => {
      resolve(info);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return (
  <>
      {isLoading ? <Loading /> : <ItemList items={items} />}
    </>
  );
}