import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "../components/history";
import "./Home.css";
import ReactPlayer from "react-player";
import Carousel from "../components/Carousel";

let firstimages = [
  {
    imgSrc: "https://i.imgur.com/pgCzueK.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/L75otV6.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
  }
];


class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h3 className="align">Welcome to ProductHub</h3>
          <div class="container">
          <h3 className="align2">Include Producthub motto/mission statement here</h3>
            <h4 class="rightHeader">Introduction</h4>
          </div>
          <div class="container">
            <ReactPlayer
              className="space2"
              width="600px"
              height="400px"
              url="https://www.youtube.com/watch?v=aS-LUW5Jim0"
            />
            <p className="space3">(talk about producthub here)</p>
          </div>
        </div>
        <div className="first">
          <h3 className="title">[Sliding Images]</h3>
          <div>
            <Carousel slideItems = {firstimages}/>
          </div>
        </div>
        <div className="second">
          <h3>Featured Products</h3>
          <div>
            <Carousel slideItems = {firstimages}/>
          </div>
        </div>
        <div className="third">
          <h3>What makes us different?</h3>
        </div>
        <div className="fourth">
          <h3>Featured Article Cards</h3>
          <div>
            <Carousel slideItems = {firstimages}/>
          </div>
        </div>
        <div className="fifth">
          <h3>Video about our process</h3>
          <div>
            <ReactPlayer
              className="video"
              width="1450px"
              height="600px"
              url="https://www.youtube.com/watch?v=aS-LUW5Jim0"
            />
          </div>
        </div>
        <div className="sixth">
          <h3>Featured Projects</h3>
        </div>
      </div>
    );
  }
}
export default Home;
