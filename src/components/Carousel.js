import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay>
        <div>
            <img src={require('../references/litho.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/litho.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')} alt = "litho"/>
        </div>
    </Carousel>
);