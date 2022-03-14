import React, { useState } from 'react'
import { motion } from 'framer-motion';

import {variants} from '../animationVariants';
import data from '../data.json';

const Destination = () => {
    const [destinations, setDestinations] = useState(data.destinations);
    const [currentDestination, setCurrentDestination] = useState(destinations[0]);
    const handleChange = name => {
      setCurrentDestination(destinations.filter(destination => destination.name === name)[0])
    }

    const destinationNavElements = destinations.map(destination => (
      <button
        key={destination.name} 
        className={`destination-menu-item ${destination === currentDestination ? 'active': ''}`}  
        onClick={() => handleChange(destination.name)}>
          <p>
            {destination.name}
          </p>
      </button>
    ))

  return (
    <motion.div exit={{ opacity: 0 }} transition={{duration:.2}} initial={{opacity:0}} animate={{opacity:1}}>
      <main className='text-white text-center destination-page-container'>
        <p className='text-white h5 section-text'>
          <strong className='opacity-25'>01</strong> Pick your destination
        </p>
        <section className='m0 destination-content-wrapper'>
          <motion.img
            key={currentDestination.images.png} 
            variants={variants}
            initial={"hide"}
            animate={"show"}
            className='planet-image' 
            src={currentDestination.images.png}
          />
          <div className='destination-content-container'>
            <nav aria-label='destination'>
                {destinationNavElements}
            </nav>  
            <motion.h3
              key={currentDestination.name} 
              variants={variants}
              initial={"hide"}
              animate={"show"}
              className='h3 m0 destination-title'>
                {currentDestination.name}
            </motion.h3>
            <motion.p
              key={currentDestination.description} 
              variants={variants}
              initial={"hide"}
              animate={"show"}
              className='destination-description m0 paragraph'>
                {currentDestination.description}
            </motion.p>
            <hr className='separator'/>
            <motion.div
              key={currentDestination.distance} 
              variants={variants}
              initial={"hide"}
              animate={"show"}
              className='destination-info-container text-center'>
              <div className='destination-info-section'>
                <p className='subheading_2 m0 destination-info-title'>AVG. distance</p>
                <p className='subheading_1 m0'>{currentDestination.distance}</p>
              </div>  
              <div className='destination-info-section'>
                <p className='subheading_2 m0 destination-info-title'>EST. travel time</p>
                <h4 className='subheading_1 m0'>{currentDestination.travel}</h4>
              </div>  
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default Destination