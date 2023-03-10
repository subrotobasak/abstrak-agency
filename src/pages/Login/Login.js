import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GithubButton from '../../components/GithubButton/GithubButton';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebas.init"
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const messageDiv = document.getElementById("message-div");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        messageDiv.innerHTML = error;

    }
    if (loading) {
        messageDiv.innerHTML = "Lodading....";
    }
    if (user) {
        messageDiv.innerHTML = "Login Successfully";
    }
    return (
        <div>
            <section className="login-area">
                <Container>
                    <div className="section-heading">
                        <h3>Login Now</h3>
                        <p>Please login to continue using our website.</p>
                    </div>
                    <Row>

                        <Col lg={6}>


                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                <Form.Control type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">

                                <Form.Control type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <div id="message-div"></div>

                            <Link to="/forgotpassword">Forgot Password?</Link>
                            <Link type='submit' onClick={() => signInWithEmailAndPassword(email, password)} className="login-button mt-3">Login</Link>
                            <p className="mt-3">
                                New to Abstack? <Link to="/register">Please Create New Account.</Link>
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

            </section>
        </div>
    );
};

export default Login;