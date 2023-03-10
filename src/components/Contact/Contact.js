import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact-area px-0">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-us">
                            <h3>About Us</h3>
                            <h2 className="mb-5">We do design, code & develop.</h2>
                            <p>Welcome to our website and mobile app development company! We are a team of skilled and passionate developers, designers, and project managers dedicated to delivering outstanding software solutions to our clients.</p>
                            <p> Our company offers a range of services that include website design, mobile app development, custom software development, e-commerce solutions, and digital marketing. We believe in using the latest technology and innovative tools to create the best possible products for our clients.</p>

                        </div>

                        <div className="footer-social">
                            <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link><i className="fa-brands fa-twitter"></i></Link>
                            <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>


                    </Col>

                    <Col lg={6}>
                        <div className="cotact-from">
                            <h3>Get a free Keystroke quote now</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="John Smith" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="example@gmail.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="+123456789" />
                                </Form.Group>
                                <Link to="/" className="contact-button">Get Free Quote</Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Contact;