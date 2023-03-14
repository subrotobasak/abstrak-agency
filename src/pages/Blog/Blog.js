import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileImage from "../../images/theresa.png"
import ProfileImage2 from "../../images/author-2.png"
import ImageOne from "../../images/blog-1.jpg"
import ImageTwo from "../../images/blog-2.jpg"
import "./Blog.css";
import { Link } from 'react-router-dom';
import CommonBanner from '../../components/CommonBanner/CommonBanner';

const Blog = () => {
    return (
        <section className="blog-area">
            <CommonBanner/>
            <Container>
                <div className="blog-contetn">
                <Row>
                    <Col lg={6}>
                    <div className="single-blog">
                        <div className="profile-area d-flex py-3">
                            <img src={ProfileImage} alt="profile" />
                            <div className="profile-text">
                                <h4>Theresa Underwood</h4>
                                <p>Mar 07, 2023</p>
                            </div>
                        </div>

                        <div className="blog-details">
                            <img src={ImageOne} alt="image1" className="w-100" />

                            <h2 className="py-4">
                                Follow your own design process.
                            </h2>
                            <p>Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget?</p>
                            <Link to="/" className="read-more">Read More</Link>
                        </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                    <div className="single-blog">
                        <div className="profile-area d-flex py-3">
                            <img src={ProfileImage2} alt="profile" />
                            <div className="profile-text">
                                <h4>Alina Rose</h4>
                                <p>Mar 14, 2023</p>
                            </div>
                        </div>

                        <div className="blog-details">
                            <img src={ImageTwo} alt="image1" className="w-100" />

                            <h2 className="py-4">
                            SEO Statistics You Should Know.
                            </h2>
                            <p>Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget?</p>
                            <Link to="/" className="read-more">Read More</Link>
                        </div>
                        </div>
                    </Col>

                   
                </Row>
                </div>

            </Container>

        </section>
    );
};

export default Blog;