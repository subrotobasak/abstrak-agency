import React from 'react';
import { Link } from 'react-router-dom';
import GithubImage from "../../assets/github.png";
import "./GithubButton.css"

const GithubButton = () => {
    return (
        <div className="github-button">
        <Link to = " "><img src ={GithubImage} alt="GoogleButton"/>Continue With Google</Link>
        
    </div>
    );
};

export default GithubButton;