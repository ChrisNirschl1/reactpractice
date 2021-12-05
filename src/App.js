import React, {useState} from "react";
import Header from "./components/Header"

import Aboutme from "./pages/Aboutme"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">Hello World</div>
    <Header />
    
    <Switch>
      <Route  exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route  exact path="/">
        <Aboutme />
      </Route>
      <Route exact path="/contactme">
        <Contact />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
