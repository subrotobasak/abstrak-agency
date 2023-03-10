import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileImage from "../../images/theresa.png"
import ProfileImage2 from "../../images/author-2.png"
import ImageOne from "../../images/image-1.jpg"
import ImageTwo from "../../images/image-3.jpg"
import "./Blog.css";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="blog-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="profile-area d-flex">
                            <img src={ProfileImage} alt="profile" />
                            <div className="profile-text">
                                <h4>Theresa Underwood</h4>
                                <p>Mar 07, 2023</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img src={ImageOne} alt="image1" className="w-100" />

                        <h2 className="py-4">
                            Follow your own design process, whatever gets you to the outcome.
                        </h2>
                        <p>Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget?</p>
                        <Link to ="/" className="read-more">Read More</Link>
                    </Col>
                    <Col lg={6}>
                        <div className="profile-area d-flex">
                            <img src={ProfileImage2} alt="profile" />
                            <div className="profile-text">
                                <h4>Alina Rose</h4>
                                <p>Mar 09, 2023</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img src={ImageTwo} alt="image1" className="w-100" />

                        <h2 className="py-4">
                        Cloud Hosting Growing Faster Ever
                        </h2>
                        <p>Cloud servers can help your site load faster by using high-performing servers, lightning-fast processors and high-quality solid-state drive (SSD) storage.</p>
                        <Link to ="/" className="read-more">Read More</Link>
                    </Col>
                </Row>
                
            </Container>

        </section>
    );
};

export default Blog;