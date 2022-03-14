import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{duration:.2}} initial={{opacity:0}} animate={{opacity:1}}>
      <main className='text-white text-center home-page-container'>
        <section className='m0 intro-text-section'>
          <p className='paragraph text-white h5'>So, you want to travel to</p>
          <h1 className='h1 m0 intro-SPACE-text'>SPACE</h1>
          <p className='paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </section>
        <Link to="/destination">
          <button className='explore-button'>explore</button>  
        </Link>

      </main>
    </motion.div>
  )
}

export default Home