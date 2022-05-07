import React from "react";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
