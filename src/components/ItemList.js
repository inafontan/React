import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <section>
      {items?.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </section>
  );
};
