import React, {useState} from 'react'
import {motion} from 'framer-motion'

import {variants} from '../animationVariants';
import data from '../data.json';

const Crew = () => {
    const [crewMembers, setMembers] = useState(data.crew);
    const [currentCrewMember, setCurrentCrewMember] = useState(crewMembers[0]);

    const handleChange = name => {
        setCurrentCrewMember(
            crewMembers.filter(member => member.name === name)[0]
            )
    }

    const crewNavElements = crewMembers.map(member => (
            <button 
                key={member.name} 
                className={`circle-button ${currentCrewMember.name === member.name ? 'active' : ''}`} 
                onClick={() => handleChange(member.name)}>
            </button>
        ))

  return (
    <motion.div variants={variants} exit={"hide"} initial={"hide"} animate={"show"}>
        <main className='text-white text-center destination-page-container crew-page-container'>
        <p className='text-white h5 section-text crew-section-text'>
            <strong className='opacity-25'>02</strong> Meet your crew
        </p>
            <section className='m0 crew-content-container'>
                    <div className='crew-image-container'>
                        <motion.img 
                            key={currentCrewMember.images.png}
                            variants={variants}
                            initial={"hide"}
                            animate={"show"}
                            className='crew-image' 
                            src={currentCrewMember.images.png} />
                    </div>
                    <div className='crew-info-container'>
                        <nav aria-label='crew'>
                            {crewNavElements}
                        </nav>
                        <motion.p
                            key={currentCrewMember.bio}
                            variants={variants}
                            initial={"hide"}
                            animate={"show"}
                            className='text-white h5 section-text fake-crew-section-text'>
                            <strong className='opacity-25'>02</strong> Meet your crew
                        </motion.p>
                        <motion.div 
                            key={currentCrewMember.name}
                            variants={variants}
                            initial={"hide"}
                            animate={"show"}
                            className='crew-info'>
                            <p className='m0 crew-role-text'>{currentCrewMember.role}</p>
                            <p className='m0 subheading_1 crew-member-name'>{currentCrewMember.name}</p>
                            <p className='paragraph crew-member-bio'>{currentCrewMember.bio}</p>  
                        </motion.div>
                    </div>
            </section>
        </main>
    </motion.div>
  )
}

export default Crew