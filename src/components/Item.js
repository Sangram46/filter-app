import React from 'react';

const Item = React.memo(({ item }) => {
  return <div>{item.name}</div>;
});

export default Item;
