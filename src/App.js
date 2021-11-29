<<<<<<< HEAD
import React from "react"
import Carousel from "./components/carousel.jsx"
=======
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar_ from "./components/Navbar/Navbar"
>>>>>>> 716129ed1744b038738a8627c6d0c6109826f2f7

export default function App () {
  return (
<<<<<<< HEAD
    <>
    hndklahdad
    <Carousel />
    </>
  );
}
=======
    <Router>
    
    <div>
    <Navbar_/>
    <Switch>
    <Route exact path="/"></Route>   
    </Switch>
    </div> 
    </Router>
>>>>>>> 716129ed1744b038738a8627c6d0c6109826f2f7

  )}