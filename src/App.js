import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Terms from "./components/terms";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import history from './components/history';
import Routes from './Routes';


export default function App() {
  return (
    <Router>
      <div id="container">
          <div id="header" className="sticky">
            <Header />
          </div>
          <div id = "routes">
            <Routes />
          </div>
          <div id="body" />
          <div id="footer">
            <Footer />
          </div>
      </div>
    </Router>
  );
}