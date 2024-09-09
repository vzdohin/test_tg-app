import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <Link to="/websocket">WebSocket</Link>
        </li>
        <li>
          <Link to="/currency">CurrencyPage</Link>
        </li>
        <li>
          <Link to="/infinite-feed">Infinite Feed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
