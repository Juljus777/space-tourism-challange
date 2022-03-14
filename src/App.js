import React, {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import ErrorPage from './Pages/ErrorPage';

import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();
  const [background, setBackground] = useState("var(--backgrond-image-home)");

  const handleBackground = (location) => {
    location = location.split('/')[1];
    location = location === '' ? 'home' : location;
    setBackground(`var(--background-image-${location})`);
  }
    
  useEffect(() => {
      handleBackground(location.pathname);
  }, [location])


  return (

    <div className='app' style={{"backgroundImage":background }}>
          <Navbar handleBackground={handleBackground} path={location.pathname}/>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/destination' element={<Destination />}></Route>
                <Route path='/crew' element={<Crew />}></Route>
                <Route path='/technology' element={<Technology />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>    
          </AnimatePresence>        
    </div>

  )
}

export default App