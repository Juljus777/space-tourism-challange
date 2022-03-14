import React, { useState } from 'react'
import { motion } from 'framer-motion';

import {variants} from '../animationVariants';
import data from '../data.json';

const Technology = () => {
    const [technologies, setTechnologies] = useState(data.technology);
    const [currentTechnology, setCurrentTechnology] = useState(technologies[0]);

    const handleChange = (name) => {
        setCurrentTechnology(
            technologies.filter(technology => name === technology.name)[0]
        )
    }

    const technologyElements = technologies.map(({name}, i) => (
        <button 
            key={name}
            className={`bubble-button ${name === currentTechnology.name ? 'active' : ''}`}
            onClick={() => handleChange(name)}
        >
            {i}
        </button>
    ))

  return (
    <motion.div exit={{ opacity: 0 }} transition={{duration:.2}} initial={{opacity:0}} animate={{opacity:1}}>
        <main className='text-white text-center main-technology-container'>
            <p className='text-white h5 section-text technology-section-text'>
                <strong className='opacity-25'>03</strong> Space launch 101
            </p>
            <section className='m0 technology-content-container'>
            <motion.div 
                className='technology-image' 
                style={{"backgroundImage":`var(--technology-image-${currentTechnology.name.replace(" ", "-").toLowerCase()})`}}/>
                <div className='technology-content'>
                    <nav aria-label='technology'>
                        {technologyElements}  
                    </nav>
                    <motion.div
                        key={currentTechnology.name}
                        variants={variants} 
                        initial={"hide"}
                        animate={"show"}
                        className='technology-info-container'>
                        <p className='m0 subheading_2 technology-terminology-text'>The terminology...</p>
                        <p className='m0 subheading_1 crew-member-name'>{currentTechnology.name}</p>
                        <p className='paragraph'>{currentTechnology.description}</p>
                    </motion.div>
                </div>
            </section>
    </main>
  </motion.div>
  )
}

export default Technology
