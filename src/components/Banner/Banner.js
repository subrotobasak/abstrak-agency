import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../images/image.jpg"
import banner2 from "../../images/image-1.jpg"
import banner3 from "../../images/image-2.jpg"
import { Link } from 'react-router-dom';
import "./Banner.css"


const Banner = () => {  
    return (
        <section className="banner-area">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>abstrak</h3>
                        <p>Build Beautiful Website & Mobile Apps</p>
                        <Link to="/about" className="more-button">More About Us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>abstrak</h3>
                        <p>Build Beautiful Website & Mobile Apps</p>
                        <Link to="/about" className="more-button">More About Us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>abstrak</h3>
                        <p>Build Beautiful Website & Mobile Apps.</p>
                        <Link to="/about" className="more-button">More About Us</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;