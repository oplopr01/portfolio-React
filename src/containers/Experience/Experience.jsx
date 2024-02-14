import React from 'react'
import "./Experience.css"
import { trainingsInfo } from './../../Portfolio';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
const Experience = () => {
  return (
    <div className="experience" id="experience">
    <div className="max-width">
        <div className="experience-section">
          
            <h1 className="experience-heading">Training & Certifications</h1>
            <div className="experience-card-container">
            {
                trainingsInfo.training && trainingsInfo.training.map((experience, i) => (
                        <ExperienceCard experience={experience} key={i} />
                ))
            }
            </div>
        </div>
    </div>
</div>
  )
}

export default Experience