import { useEffect, useState } from "react";
import { items as itemsInfo } from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  
const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
resolve (itemsInfo)
      }, 1000)
    })
    
    getItems.then((result) => {
      setItems(result)
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
      {items.map((item) => (
        <ItemList key={item.id} itemInfo={item} />
      ))}
    </div>
  )
}

export default ItemListContainer
