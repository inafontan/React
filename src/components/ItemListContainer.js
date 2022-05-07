import React, {useEffect, useState} from "react";
import { ItemList } from "./ItemList";  
import { info } from "../info/info";
import Loading from "../components/Loading";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(info);
      }, 1000);
    });

    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  return <ItemList items={items} />;
}