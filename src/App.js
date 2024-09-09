import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebSocketPage from "./pages/WebSocketPage";
import CurrencyPage from "./pages/CurrencyPage";
import InfiniteFeedPage from "./pages/InfiniteFeedPage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/websocket" element={<WebSocketPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/infinite-feed" element={<InfiniteFeedPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
