import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";




export default function Carousel(props) {
      
      let buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true
        //height: "300 px"
      };
      
      let sliderBoxStyle = {
        height: "500px",
        //, width: "200px"
        background: "tranparent"
      };
      
      let itemsStyle = {
        // ,height: "100%", padding: "0px"
        // , padding: "15px"
        // , background: "#FFCA28"
        // , borderRadius: "4px"
        // , margin: "0px 0px", padding: "0px"
      };
      
      let manner = {
        autoSliding: { interval: "3s" },
        duration: "0.5s"
      };
      
    return(
        <CarouselSlider
            slideItems={props.slideItems}
            manner={manner}
            buttonSetting={buttonSetting}
            sliderBoxStyle={sliderBoxStyle}
            itemsStyle={itemsStyle}
        />
    )
}