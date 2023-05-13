import React from "react";
import List2 from "./list2";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
      { id: 1, title: 'Elemento 1' },
      { id: 2, title: 'Elemento 2' },
      { id: 3, title: 'Elemento 3' },
    ]);
  
    const handleDelete = (itemToDelete) =>
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemToDelete.id)
      );
  
    return <List2 items={items} onDelete={handleDelete} />;
  }

export default App