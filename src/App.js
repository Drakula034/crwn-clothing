import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component";
import NavBar from "./components/navbar/navbar.component";
import LoginAndSignUpPage from "./pages/login-and-signup/login-and-signup.component";

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
          <Route path="/signin" element={<LoginAndSignUpPage />} />
          
        
      </Routes>
    </div>
  );
}

export default App;
