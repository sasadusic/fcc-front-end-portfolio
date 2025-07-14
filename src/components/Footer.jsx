import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router"


const Footer = () => {
  return (
    <footer className="footer" id='footer'>
        <div className="footer-cont">
            <div className="footer-item">
                <h3 className="label mb-12">Contact me via phone or email</h3>
                <p className="phar muted mb-24">Feel free to reach out directly for any questions or opportunities.</p>
                <div className="contact-cont">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p className="phar">061 26 32 722</p>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p className="phar">sasadusic01101989@gmail.com</p>
                </div>
            </div>
            <div className="footer-item">
                <h3 className="label mb-12">Or connect through social media</h3>
                <div className="icon-cont">
                    <NavLink className="icon"  to='https://github.com/sasadusic' target="_blank" 
  rel="noopener noreferrer"><i className="fa-brands fa-github"></i></NavLink>
                    <NavLink className="icon"   to='https://www.linkedin.com/in/sa%C5%A1a-du%C5%A1i%C4%87-70b138218/' target="_blank" 
  rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></NavLink>
                    <NavLink className="icon"   to='https://github.com/sasadusic' target="_blank" 
  rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer