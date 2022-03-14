import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'
import MenuIcon from '../assets/shared/icon-hamburger.svg'
import CloseIcon from '../assets/shared/icon-close.svg'

const Navbar = ({ path }) => {

    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(oldState => !oldState);
    }

    return (
        <>
            <nav aria-label='main'>
                <Link to="/" className='navLogo'>
                    <img src={Logo} />
                </Link>
                <hr className='navLine' />
                <div className='main-nav-container'>
                    <Link className={`menuItem ${path === '/' ? 'active' : ''}`} to="/">
                        <strong>00</strong> <span>Home</span>
                    </Link>
                    <Link className={`menuItem ${path === '/destination' ? 'active' : ''}`} to="/destination">
                        <strong>01</strong> <span>Destination</span>
                    </Link>
                    <Link className={`menuItem ${path === '/crew' ? 'active' : ''}`} to="/crew">
                        <strong>02</strong> <span>crew</span>
                    </Link>
                    <Link className={`menuItem ${path === '/technology' ? 'active' : ''}`} to="/technology">
                         <strong>03</strong> <span>Technology</span>
                    </Link>
                </div>
            </nav>
            <nav aria-label='main-mobile'>
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <button id='mobNavButton' onClick={toggleMobileNav}>
                    <img src={mobileNav ? CloseIcon : MenuIcon} />
                </button>
            </nav>
            <div className={`offcanvas-menu navText ${mobileNav ? 'active' : ''}`}>
                <Link className={`mobMenuItem ${path === '/' ? 'active' : ''}`} to="/" onClick={toggleMobileNav}>
                    <strong>00</strong> <span>Home</span>
                </Link>
                <Link className={`mobMenuItem ${path === '/destination' ? 'active' : ''}`} to="/destination" onClick={toggleMobileNav}>
                    <strong>01</strong> <span>Destination</span>
                </Link>
                <Link className={`mobMenuItem ${path === '/crew' ? 'active' : ''}`} to="/crew" onClick={toggleMobileNav}>
                    <strong>02</strong> <span>crew</span>
                </Link>
                <Link className={`mobMenuItem ${path === '/technology' ? 'active' : ''}`} to="/technology" onClick={toggleMobileNav}>
                    <strong>03</strong> <span>Technology</span>
                </Link>
            </div>
        </>

    )
}

export default Navbar