import React from "react";
import ListItem from "./listitem";

function List2({ items, onDelete }) {
    return (
      <div>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>
    );
  }

  export default List2