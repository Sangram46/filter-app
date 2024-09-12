import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
