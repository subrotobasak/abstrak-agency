import React from 'react';
import CommonBannerImage from "../../images/banner.jpg"
import "./CommonBanner.css"

const CommonBanner = () => {
    return (
        <secttion className="common-banner">
            <img src= {CommonBannerImage} alt="" />

        </secttion>
    );
};

export default CommonBanner;