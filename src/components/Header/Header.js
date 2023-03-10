import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebas.init"
import Logo from '../Logo/Logo';
import "./Header.css"
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    // Sign Out
    const handleSignOut = () => {
        signOut(auth);
    }

    return <header className="header-area">
        <Navbar expand="lg" className="py-3 fixed-top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Logo image={LogoImage} />

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/blog" className="nav-link">Blog</NavLink>


                        {
                            user ?
                                <NavLink onClick={handleSignOut} className="login-button nav-link">Sign Out</NavLink>

                                :
                                <NavLink to="/login" className="login-button nav-link">Login</NavLink>


                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
};

export default Header;