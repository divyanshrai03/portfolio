import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }
  
  return (
    <section className='skills-container' id='skills'>
        <h5>Technical Proficiency</h5>
        
        <div className='skills-content'>
            <div className='skills'></div>

            <div className='skills-info'>
                {SKILLS.map((item) => (
                  <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                      handleSelectedSkill(item);
                    }}
                  />
                ))}
            </div>

            <div className='skills-info'>
                <SkillsInfoCard 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills