import React from 'react'
import { useState } from 'react'
import { Router, Routes, Route, NavLink, Link } from "react-router"

import './style.css'
import Me from '../pages/Me.jsx'
import Quote from '../pages/Quote.jsx'
import Calc from '../pages/Calc.jsx'
import Drums from '../pages/Drums.jsx'
import Markdovn from '../pages/Markdovn.jsx'
import Clock from '../pages/Clock.jsx'
import Footer from './Footer.jsx'
import logo from '../assets/icons/logo.png'

const Home = () => {

    const [ active, setActive] = useState(false)

    const handleActive = () => {setActive(!active)}

  return (
    <Router>

    <>
    <div className={ active ? 'side active' : 'side'} id="side">
        <div className="side-up">

            <div id="logo" className="logo"><img className='logo-image' src={logo} alt="" /><NavLink to='/'>
                DusicCode
            </NavLink>
            <div className="hamburger">

            <i className={ active ? 'fa fa-close' : 'fa fa-bars'} aria-hidden="true" onClick={handleActive}></i></div>
            </div>
                <nav className="navbar">
                    <NavLink to='/' className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        }  onClick={handleActive}>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        <p>
                            About Me
                        </p>
                    </NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        } to='/calc'  onClick={handleActive}><i className="fa-solid fa-calculator"></i>
                <p>
                    JS Calculator
                </p>
            </NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        } to='/q' onClick={handleActive}><i className="fa fa-address-book" aria-hidden="true"></i>
                <p>
                    Quote Machine
                </p>
            </NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        } to='/clock' onClick={handleActive}><i className="fa-solid fa-stopwatch"></i>
                <p>
                    25 + 5 Clock
                </p>
            </NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        } to='/drums' onClick={handleActive}><i className="fa-solid fa-drum"></i>
                <p>
                    Drum Machine
                </p>
            </NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "nav-link nav-active" : "nav-link"
        } to='/markdovn' onClick={handleActive}><i className="fa-brands fa-markdown"></i>
                <p>
                    Markdovn Preview
                </p>
            </NavLink>
        </nav>
    </div>
        <div className="profile-info">
            {/* <a className="done" href="register.html">Register</a>
            <a className="send" href="login.html"><i className="fa fa-paper-plane" aria-hidden="true"></i>
            Login</a>
            <a className="profile" href="#">
                <div className="profile-img"></div>    
                <p>Sasa Dusic</p>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </a> */}
        </div>
    </div>
    {/* <!-- Main --> */}
    <Routes>
        <Route path='/' element={<Me />} />
        <Route path='calc' element={<Calc />} />
        <Route path='q' element={<Quote />} />
        <Route path='clock' element={<Clock />} />
        <Route path='drums' element={<Drums />} />
        <Route path='markdovn' element={<Markdovn />} />
    </Routes>
    {/* <!-- Main --> */}
    
    {/* <!-- Footer --> */}
    <Footer />
    {/* <!-- Footer --> */}
    </>
    </Router>
  )
}

export default Home