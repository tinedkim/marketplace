import React, { Component } from 'react';
import './App.css';
import Search from '../../components/Search'
import Details from '../../components/Details'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {

  render() {
    return(
    <div>
      <div className = "search">
          <Search/>
      </div>
      <div className = "container">
      <Router>
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
        <Switch>
          <Route exact path='../../components/Details' component={Details} />
        </Switch>
      </Router>
      </div>
    </div>

    )
  }
}
export default App;
