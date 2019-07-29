import React, { Component } from "react";
import ListView from "./components/ListView";
import SingleView from "./components/SingleView";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={ListView} />
      <Route path="/user/:id" component={SingleView} />
    </div>
  </Router>
);
export default App;
