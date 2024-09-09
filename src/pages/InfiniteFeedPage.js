import React, { useState } from "react";

const InfiniteFeedPage = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => `Элемент ${i + 1}`)
  );

  const loadMoreItems = () => {
    const newItems = Array.from(
      { length: 10 },
      (_, i) => `Элемент ${items.length + i + 1}`
    );
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <div>
      <h1>Бесконечная лента</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={loadMoreItems}>Загрузить еще</button>
    </div>
  );
};

export default InfiniteFeedPage;
