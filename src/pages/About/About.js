import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImage from "../../assets/about.png"
import "./About.css"

const About = () => {
    return (
        <section className="about-section">
            <Container>
                <Row>
                    <Col lg={6}>

                        <img
                            src={AboutImage} alt="aboutimage" className="w-100" />

                    </Col>
                    <Col lg={6}>


                        <h3>Who we are</h3>
                        <h2 className="mb-5">We do design, code & develop.</h2>
                        <p>Welcome to our website and mobile app development company! We are a team of skilled and passionate developers, designers, and project managers dedicated to delivering outstanding software solutions to our clients.</p>
                        <p> Our company offers a range of services that include website design, mobile app development, custom software development, e-commerce solutions, and digital marketing. We believe in using the latest technology and innovative tools to create the best possible products for our clients.</p>


                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;