
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar_ from "./components/Navbar/Navbar"
import Carousel from "./components/carousel.jsx"
import Services from "./components/services/services"
import Promises from "./components/promises/promises"
export default function App () {
  return (
    <>

    <Router>

    <div>
    <Navbar_/>
    <Carousel />
    <Services />
    <Promises />
    <Switch>
    <Route exact path="/"></Route>
    </Switch>
    </div>
    </Router>
</>

  )}
