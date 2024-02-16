// import React, { useRef, useEffect } from 'react';
import './Greeting.css'
import { greeting } from '../../Portfolio'
import profile from "../../images/DSC_3965-min.jpg"
// import profile from "../../images/profile.jpg"





const Greeting = () => {

    if (greeting.display !== true) {
        return null
    }

    return (
        <section className="home" id="home">
            <div className="max-width homeContainer">
                <div className="home-content">
                    <div className="text-1">{greeting.title}</div>
                    <div className="text-2">{greeting.username}</div>
                    <div className="text-3"> <p>As a recent graduate in Information Technology (2022) and trained on fullstack development, I bring a versatile skill set and a passion for technology. I am eager to embark on my journey in the field of software development or full-stack web development. With a solid foundation in engineering and a diverse range of skills, I am enthusiastic about securing an entry-level position where I can continue to learn, grow, and make meaningful contributions.</p>  </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + `LakhanRathore_FullStack_0.pdf`} target="_blank" rel="noreferrer">See My Resume</a>
                    </div>  
                    <div className="profileLinks">
                        <a href="https://www.linkedin.com/in/lakhan-rathore-b88796188" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/oplopr01" target="_blank">GitHub</a>
                    </div>
                        
                </div>
                    <div className="homeImageContainer">
                        <img className='homeImage' src={profile} alt="" />
                    </div>
            </div>
        </section>
    )
};

export default Greeting;
