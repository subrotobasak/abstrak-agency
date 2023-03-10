import React from 'react';
import "./NotFoundPage.css"
import Container from "react-bootstrap/esm/Container"

const NotFoundPage = () => {
    return (
        <section className='not-found-page'>
            <div className='hero-area'>
            </div>
            <div className='not-found'>
            <Container>
            <h2>404</h2>
            <h3>Not Found</h3>
            </Container>
            </div>
        </section>
    );
};

export default NotFoundPage;