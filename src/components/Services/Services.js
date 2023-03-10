import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (

        <section className="services-area px-0">
            <Container>
                <h3 className="text-center">What We Can Do For You</h3>
                <h2 className="text-center mb-5">Services we can help you with</h2>
                <Row>
                    {
                        services.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className="single-service">

                                    <img
                                        src={item.img} className="w-100"
                                        alt="Design" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>

                                    <Link to="/" className="more-button">Find out more</Link>

                                </div>
                            </Col>

                        ))
                    };
                </Row>
            </Container>
        </section>
    );
};

export default Services;