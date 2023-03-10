import React from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Consultation from "../../images/consultation.png";
import "./WorkTogether.css"

const WorkTogether = () => {
    return (
        <section className="work-area px-0">
            <Container>
            <div className="section-heading text-center">
                    <h3>Let's Work Together</h3>
                    <h2 className="mb-5">Need a successful project?</h2>
                    <Link to=" " className="work-button">Estimate Project</Link>
                    </div>
                   <div className='text-center'>
                   <img src={Consultation} alt="Consultation" />
                   </div>


            </Container>
        </section>
    );
};

export default WorkTogether;