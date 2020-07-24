import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel showArrows={false} dynamicHeight={true}>
        <div>
            <img src={require('../references/litho.jpeg')} alt = "litho"/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')}/>
        </div>
        <div>
            <img src={require('../references/custom.jpeg')}/>
        </div>
        <div>
            <img src={require('../references/litho.jpeg')}/>
        </div>
        <div>
            <img src={require('../references/frame.jpeg')}/>
        </div>
        <div>
            <img src={require('../references/custom.jpeg')}/>
        </div>
    </Carousel>
);