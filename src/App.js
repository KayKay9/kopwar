import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home";
import Service from "./pages/services";
import Footer from "./components/footer";
import logo from './logo.svg';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      <Service />
      <Footer />
      </div>
    );
  }
}

export default App;
