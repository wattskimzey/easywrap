import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './css/animation.css';
import './css/style.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
