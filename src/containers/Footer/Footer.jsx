import React from 'react';
import './Footer.css'

const Footer = () => {   

    const year = new Date().getFullYear();

    return (
        <footer>
            <span>Created By `Lakhan Rathore` | <span className="far fa-copyright"></span> { year } All rights reserved.</span>
        </footer>
    )
};

export default Footer;
