import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar_ from "./components/Navbar/Navbar"

export default function App () {
  return (
    <Router>
    
    <div>
    <Navbar_/>
    <Switch>
    <Route exact path="/"></Route>   
    </Switch>
    </div> 
    </Router>

  )}