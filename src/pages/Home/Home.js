import React from 'react';
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Pricing from '../../components/Pricing/Pricing';
import WorkTogether from '../../components/WorkTogether/WorkTogether';

const Home = () => {
    return (
        <>
        <Banner/>
        <Services/>
        <Pricing/>
        <WorkTogether/>
        <Contact/>
        </>
    );
};

export default Home;