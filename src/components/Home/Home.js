import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home-module.scss'
import bgImage from './img/home-bg.png'

let bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

class Home extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className='section' style={bg}>
                <Slider {...settings}>
                    <div className='content'>
                        <div className='content__wrap'>
                            <div className='d-flex flex-column text-center text-lg-right subtitle'>
                                <span className='text-uppercase'>GOOD IDEAS</span>
                                <span>comes</span>
                            </div>
                            <h1 className='title'>FIRST!</h1>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__wrap'>
                            <h2 className='subtitle text-center'>Lorem ipsum dolor sit amet.</h2>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='content__wrap'>
                            <h2 className='subtitle text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
                        </div>
                    </div>

                </Slider>
            </section>
        );
    }
}


export default Home;