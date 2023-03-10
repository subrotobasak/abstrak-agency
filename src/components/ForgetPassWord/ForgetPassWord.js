import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ForgetPassWord.css"

const ForgetPassWord = () => {
    return (
        <div className='forgot-password'>
            <Container>
                <div className='section-heading'>
                    <h3>Forgot Password</h3>
                    <p>Please put email address and click submit.</p>
                </div>
                <Row>
                    <Col lg={6} offset-lg={3}>
                        <Form>
                            
                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                                <Link to=" " className="login-button mt-3">Submit</Link>
                            </Form.Group>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ForgetPassWord;