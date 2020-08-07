import React, { Component } from 'react';
import './App.css';
import Details from './components/Details'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Terms from "./components/t&c";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return(
    <div>
      <Navbar/>
    <div className="main-container">
    <body>
      <div className = "card-container">
        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>

        <div className ="card">
          <Details/>
        </div>
      </div>
    </body>
    </div>
    </div>
    )
  }
}
export default App;