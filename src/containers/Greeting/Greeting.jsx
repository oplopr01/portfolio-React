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
                    <div className="text-3"> <p>React Developer with 2 years of professional experience in building scalable, user-focused web
                        applications within enterprise environments. Strong hands-on experience with React,
                        TypeScript, JavaScript, and modern frontend tooling, along with exposure to backend
                        integration using REST APIs and GraphQL. Proven ability to work in Agile teams, collaborate with
                        Backend, QA teams and cross-functional stakeholders, and deliver high-quality features.</p>  </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + `LakhanRathore_FullStack_0.pdf`} target="_blank" rel="noreferrer">See My Resume</a>
                    </div>
                    <div className="profileLinks">
                        <a href="https://www.linkedin.com/in/lakhan-rathore-b88796188" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/oplopr01" target="_blank" rel="noreferrer">GitHub</a>
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
