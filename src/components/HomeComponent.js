import React from 'react';
import { FadeTransform } from 'react-animation-components';
import MainCarousel from './CarouselComponent';

function Home(props) {
    return (
        <div className='container-fluid pb-4 px-0'>
            <FadeTransform
			    in transformProps={{ exitTransform: "scale(0.2) translateY(10%)" }}>
                    <MainCarousel />
            </FadeTransform>
        </div>
    );
}

export default Home;