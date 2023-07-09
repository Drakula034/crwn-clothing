import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* // <HomePage /> */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatsPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
