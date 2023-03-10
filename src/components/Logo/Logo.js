import React from 'react';

const Logo = ({ image }) => {
    return (
        <div className="site-logo">
            <img src={image} alt="Logo"></img> 
        </div >
    );
};

export default Logo;