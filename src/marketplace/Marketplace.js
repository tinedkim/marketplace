import React, { Component } from 'react';
import Details from '../components/Details'
import Navbar from '../components/Navbar'
import './Marketplace.css'

class Marketplace extends Component {
  render() {
    return(
      <div className = "marketplace">
        <Navbar/>
        <div className="main-container">
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
            <Details className = "card"/>
        </div>
      </div>

    )
  }
}
export default Marketplace