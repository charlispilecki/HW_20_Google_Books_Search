import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./Search";
import Saved from "./Saved";
import Header from "./Header"

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/saved">
            <Saved></Saved>
          </Route>
          <Route path="/">
            <Search></Search>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
