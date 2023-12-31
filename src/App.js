import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component";
import NavBar from "./components/navbar/navbar.component";
import LoginAndSignUpPage from "./pages/login-and-signup/login-and-signup.component";
import {auth} from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user)
    });

    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){


    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<LoginAndSignUpPage />} />
            
          
        </Routes>
      </div>
    );
  }
  
}

export default App;
