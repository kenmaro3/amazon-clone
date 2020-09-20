import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import Login from "./Login"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads..login__container
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
