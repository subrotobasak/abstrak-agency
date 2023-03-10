import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Pricing.css"

const Pricing = () => {
    return (
        <section className="pricing-area px-0">
           
            <Container>
            <div className="section-heading">
                <h3 className="text-center">Pricing Plan</h3>
                <h2 className="text-center mb-5">We have built solutions for...</h2>

            </div>
                <Row>
                    <Col lg={4} >
                        <div className="single-pricing">
                           <div className="text-center">
                           <h2>Professional</h2>
                            <p>A beautiful, simple website</p>
                            <div className="extra-div">
                            <div></div>
                            </div>
                            <h3>$199.99</h3>
                            <Link to=" " className="price-button">Get Started Today</Link>
                           </div>
                            <ul>
                                <li> <i className="fa-solid fa-check"></i>10 Pages Responsive Website</li>
                                <li> <i className="fa-solid fa-check"></i>5 PPC Campaigns</li>
                                <li> <i className="fa-solid fa-check"></i>10 SEO Keywords</li>
                                <li> <i className="fa-solid fa-check"></i>5 Facebook Camplaigns</li>
                                <li> <i className="fa-solid fa-check"></i>2 Video Camplaigns</li>
                            </ul>

                            </div>
                    </Col>
                    
                    <Col lg={4}>
                        <div className="single-pricing">
                           <div className="text-center">
                           <h2>Standard</h2>
                            <p>Small Team</p>
                            <div className="extra-div">
                            <div></div>
                            </div>
                            <h3>$219.99</h3>
                            <Link to=" " className="price-button">Get Started Today</Link>
                           </div>
                            <ul>
                                <li> <i className="fa-solid fa-check"></i>20 Pages Responsive Website</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited PPC Campaigns</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited SEO Keywords</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited Facebook Camplaigns</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited Video Camplaigns</li>
                            </ul>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-pricing">
                           <div className="text-center">
                           <h2>Ultimate</h2>
                            <p>Large Team</p>
                            <div className="extra-div">
                            <div></div>
                            </div>
                            <h3>$559.99</h3>
                            <Link to=" " className="price-button">Get Started Today</Link>
                           </div>
                            <ul>
                                <li> <i className="fa-solid fa-check"></i>50 Pages Responsive Website</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited PPC Campaigns</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited SEO Keywords</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited Facebook Camplaigns</li>
                                <li> <i className="fa-solid fa-check"></i>Unlimited Video Camplaigns</li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Pricing;