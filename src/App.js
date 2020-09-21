import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home';
import Login from "./Login"
import Orders from "./Orders"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout';
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51HTRQIErO53dUqrxunt9FYCKR4DghOKfY0DyT4cbhgqGoIcfXLZrHp5oL0CPgE4rMybuq6Nz51YsLr6FCs9gHz3700BrMmH0bW"
)


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
        <Route path="/orders">
            <Orders />
          </Route>          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
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
