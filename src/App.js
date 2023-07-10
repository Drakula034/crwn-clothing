import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component";
import NavBar from "./components/navbar/navbar.component";

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          
        
      </Routes>
    </div>
  );
}

export default App;
