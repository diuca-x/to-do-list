import React from "react";
import { useState } from "react";

function ListItem({ item, onDelete }) {
    const [showDeleteButton, setShowDeleteButton] = useState(false);
  
    const handleMouseEnter = () => setShowDeleteButton(true);
    const handleMouseLeave = () => setShowDeleteButton(false);
  
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {item.title}{' '}
        {showDeleteButton && (
          <button onClick={() => onDelete(item)}>Eliminar</button>
        )}
      </div>
    );
  }

  export default ListItem