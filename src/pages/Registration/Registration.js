import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GithubButton from '../../components/GithubButton/GithubButton';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Registration.css";
import auth from '../../firebas.init';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const messageDiv = document.getElementById("message-div");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    if (error) {
        messageDiv.innerHTML = error;

    }
    if (loading) {
        messageDiv.innerHTML = "Lodading....";
    }
    if (user) {
        messageDiv.innerHTML = "Successfully Registered!";
    }
    return (
        <div className="reg-area">
            <Container>
                <div className='section-heading'>
                    <h3>Register Now</h3>
                    <p>Please register to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">

                            <Form.Control type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">

                            <Form.Control type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </Form.Group>
                        <div id="message-div"></div>
                        <Link type='submit'
                            onClick={() => createUserWithEmailAndPassword(email, password)} className="login-button mt-3">Register</Link>
                        <p className="mt-3">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>

                        <div className='extra'>
                            <div></div>
                            <span>Or</span>
                            <div></div>
                        </div>
                        <GoogleButton />
                        <GithubButton />
                    </Col>
                </Row>
            </Container>

        </div>


    );
};

export default Registration;