import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/animation.css';
// import './css/bootstrap-lumen.css';
import './css/style.css';
import Navbar from "./components/Navbar"
import GiftBubble from "./components/GiftBubble"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        <GiftBubble/>
      </div>
    </div>
  );
}

export default App;
