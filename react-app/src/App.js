import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import './App.css';
import './css/animation.css';
import './css/style.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Saved from "./components/Saved";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    API.getAuthStatus()
        .then(res => {

          console.log(res.data);

          this.setState({user: res.data});

        }).catch(err => console.log(err));
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <div className="container-fluid">
              <Route 
              exact 
              path="*" 
              render={props => (
                <Navbar { ... props} user={this.state.user} />
              )} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/saved" component={Saved} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
