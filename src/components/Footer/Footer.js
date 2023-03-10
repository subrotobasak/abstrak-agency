import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row>
                <Col lg={9} >
                    <p className="text-start">© 2023. All rights reserved by Subroto.</p>
                </Col>
                <Col lg>
                    <p className="text-end">Privacy Policy</p>
                </Col>
                <Col lg>
                    <p className="text-end">Terms of Use</p>
                </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;