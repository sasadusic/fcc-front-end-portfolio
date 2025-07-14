import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router"

import isoImage from '../assets/images/3d-hygge-isometric-view-of-young-woman-sitting-in-front-of-the-table-2.png'
import nobg from '../assets/images/nobg.png'
import html from '../assets/icons/icons8-html5-48.png'
import js from '../assets/icons/icons8-javascript-48.png'
import react from '../assets/icons/icons8-react-24.png'
import boots from '../assets/icons/icons8-bootstrap-48.png'
import responsive from '../assets/icons/icons8-responsive-48.png'
import django from '../assets/icons/icons8-django-48.png'
import sqlite from '../assets/icons/icons8-sqlite-50.png'
import post from '../assets/icons/icons8-postgresql-24.png'
import mongo from '../assets/icons/icons8-mongodb-24.png'
import mysql from '../assets/icons/icons8-mysql-logo-48.png'
import dj from '../assets/icons/icons8-dj-48.png'
import protect from '../assets/icons/icons8-protect-100.png'
import hierarchy from '../assets/icons/icons8-hierarchy-100.png'
import harvard from '../assets/icons/harvard.png'
import fcc from '../assets/icons/icons8-freecodecamp-96.png'
import logo from '../assets/icons/logo.png'

const Me = () => {

    const scrollToFooter = () => {
        const footer = document.getElementById('footer')
        if(footer) {
            footer.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <>
    <main className="home me" id="home">
        <div className="home-up">

            <div id="home-over" className="home-over"></div>
            <div className="home-left">
                <h1 className="home-header"><img className='home-logo' src={logo} alt="" /> Saša Dušić<br />Full-Stack web Developer</h1>
                <p className="home-phar">I’m a passionate Full-Stack Web Developer who builds modern, responsive, and efficient web applications using technologies like React, Flask, and Django. From designing sleek user interfaces to building robust backend systems, I create solutions that deliver both performance and great user experience.</p>
                <div className="btn-cont">
                    <NavLink className="btn book" to='#' onClick={scrollToFooter}>Contact me</NavLink>
                    <NavLink className="btn see-offer" to='/'>My Projects</ NavLink>
                </div>
        </div>
        <div className="home-right">
            <div className="right-img"></div>  
        </div>
    </div>
    <div className="home-down">
        <div className="cont">
            <div className="nike-cont"><i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <p className="down-phar">Building responsive UIs with React and JavaScript.</p>
        </div>
        <div className="cont">
            <div className="nike-cont"><i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <p className="down-phar">Creating APIs using Flask and Django.</p>
        </div>
        <div className="cont">
            <div className="nike-cont"><i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <p className="down-phar">Developing complete web apps end-to-end.</p>
        </div>
        <div className="cont">
            <div className="nike-cont"><i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <p className="down-phar">Working with SQL and NoSQL databases.</p>
        </div>
        <div className="cont">
            <div className="nike-cont"><i className="fa fa-check" aria-hidden="true"></i>
            </div>
            <p className="down-phar">Designing clean,<br /> user-friendly web interfaces.</p>
        </div>
    </div>
    </main>
    {/* <!-- Main --> */}
    {/* <!-- Section --> */}
    <section className="products">
        <h2 className="sub-header">Tools and technologies I work with</h2>
        <div className="prod-cont">
            <div className="prod-col">
                <h3 className="prod-col-header">Frontend</h3>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={html} alt="" className="prod-card-image" />
                    <h3 className="label">HTML5/CSS3</h3>
                </div>
                <div className="card down">
                    <p className="prod-card-phar phar">Used to build the structure and semantics of modern web pages and UI components.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={js} alt="" className="prod-card-image" />
                    <h3 className="label">JavaScript (ES6+)</h3>
                </div>
                <div className="card down">
                    <p className="prod-card-phar phar">Adds interactivity and dynamic behavior to web pages through DOM manipulation and logic handling.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={boots} alt="" className="prod-card-image" />
                    <h3 className="label">Bootstrap, Tailwind...</h3>
                </div>
                <div className="card down">
                    <p className="prod-card-phar phar">Styling and layout creation with a focus on responsive design using utility-first or component-based classes.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={react} alt="" className="prod-card-image" />
                    <h3 className="label">React (Hooks, Context).</h3>
                </div>
                <div className="card down">
                    <p className="prod-card-phar phar">A powerful JavaScript library for building reusable UI components and managing application state efficiently.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={responsive} alt="" className="prod-card-image" />
                    <h3 className="label">Responsive Design, SPA development</h3>
                </div>
                <div className="card down">
                    <p className="prod-card-phar phar">Mastered the principles of building web layouts that adapt to all screen sizes using CSS, Flexbox, and Grid. Focused on accessibility, mobile-first design, and clean HTML/CSS structure.</p>
                </div>
            </div>
            </div>
            {/* Product column */}
            <div className="prod-col">
                <h3 className="prod-col-header">Backend</h3>

            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={django} alt="" className="prod-card-image" />
                    <h3 className="label">Python (Flask, django)</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">A high-level Python framework with built-in admin panel, authentication, and ORM for rapid development.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={protect} alt="" className="prod-card-image" />
                    <h3 className="label">Rest APIs, Authrentication</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">Builds maintainable and scalable APIs following REST architecture principles and best practices.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={hierarchy} alt="" className="prod-card-image" />
                    <h3 className="label">MVC architecture</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">Separates application concerns into models, views, and controllers for cleaner code organization.</p>
                </div>
            </div>
            <div className="prod-card">
                <div className="card-up">
                    <img src={protect} alt="" className="prod-card-image" />
                    <h3 className="label">JWT (JSON Web Tokens)</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">Ensures safe and structured user input before storing or processing data in APIs.<br />Manages user accounts, login systems, and permissions to protect routes and data access.</p>
                </div>
            </div>
            <div className="prod-card">
                <div className="card-up">
                    <img src={dj} alt="" className="prod-card-image" />
                    <h3 className="label">Django REST Framework (DRF)</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">Extends Django to easily build robust and secure REST APIs with features like serialization and permissions.</p>
                </div>
            </div>
            </div>
            {/* Product column */}
            <div className="prod-col">
                <h3 className="prod-col-header">Data Base</h3>

            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={sqlite} alt="" className="prod-card-image" />
                    <h3 className="label">SQLite</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">A lightweight embedded database often used for prototyping and local development environments.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={mysql} alt="" className="prod-card-image" />
                    <h3 className="label">MySQL</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">A widely-used open-source relational database suitable for handling structured data at scale.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={post} alt="" className="prod-card-image" />
                    <h3 className="label">POstgreSQL</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">An advanced and feature-rich relational database with strong support for data integrity and complex queries.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={mongo} alt="" className="prod-card-image" />
                    <h3 className="label">Mongo DB</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">A NoSQL, document-based database ideal for flexible data structures and high-performance applications. Great for storing JSON-like documents and scaling horizontally.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="prod-card">
                <div className="card-up">
                    <img src={dj} alt="" className="prod-card-image" />
                    <h3 className="label">SQLAlchemy, Django ORM</h3>
                </div>
                <div className="card-down">
                    <p className="prod-card-phar phar">Allows database interaction using Python classes instead of raw SQL for better maintainability.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
        </div>
        </div>
        <div className="prod-down">
            <h2 className="label">My GitHub Projects</h2>
            <p className="phar">Explore 100+ coding projects across frontend, backend, and fullstack development.</p>
            <NavLink className="btn book" to='https://github.com/sasadusic' target="_blank" 
  rel="noopener noreferrer">View on GitHub</NavLink>

            </div>
    </section>
    {/* <!-- Section --> */}
    {/* <!-- Section --> */}
    <section className="skills">
        <h2 className="sub-header">Certifications and Achievements</h2>
        <div className="skills-cont">
            <div className="skills-col">
            <h3 className="skill-col-header">Harvard</h3>
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={harvard} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">CS50X</h3>
                    <p className="phar bold">Introduction to Computer Science</p>
                    <p className="phar">Harvard's flagship computer science course covering algorithms, data structures, memory, C, Python, and web basics.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={harvard} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">CS50P</h3>
                    <p className="phar bold">Introduction to Programming with Python</p>
                    <p className="phar">Covers the foundations of Python programming, including functions, objects, file I/O, testing, and error handling.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={harvard} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">CS50W</h3>
                    <p className="phar bold">Web Programming with Python and JavaScript</p>
                    <p className="phar">Focuses on building modern web apps using Python (Flask), JavaScript, APIs, HTML, CSS, and databases.

</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={harvard} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">CS50SQL</h3>
                    <p className="phar bold">Introduction to Databases with SQL</p>
                    <p className="phar">Teaches how to model, design, and query relational databases using SQL, including joins, indexes, and constraints.</p>
                </div>
            </div>
            {/* <!-- Card --> */}
            </div>
            <div className="skills-col">
            <h3 className="skill-col-header">freeCodeCamp</h3>

            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={fcc} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">Front End Development Libraries</h3>
                    <p className="phar">Built dynamic interfaces using React, Redux, Bootstrap, jQuery, and SASS.</p>
                    <NavLink className='fcc' to='https://www.freecodecamp.org/certification/sasadusic/front-end-development-libraries' target="_blank" 
  rel="noopener noreferrer">View Certificate</NavLink>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={fcc} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">Responsive Web Design</h3>
                    <p className="phar">Learned to build responsive websites using HTML5 and CSS3, including Flexbox and CSS Grid.</p>
                    <NavLink className='fcc' to='https://www.freecodecamp.org/certification/sasadusic/responsive-web-design' target="_blank" 
  rel="noopener noreferrer">View Certificate</NavLink>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={fcc} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">Scientific Computing with Python</h3>
                    <p className="phar">Gained experience in Python basics, working with data, files, and scientific libraries.</p>
                    <NavLink className='fcc' to='https://www.freecodecamp.org/certification/sasadusic/scientific-computing-with-python-v7' target="_blank" 
  rel="noopener noreferrer">View Certificate</NavLink>
                </div>
            </div>
            {/* <!-- Card --> */}
            {/* <!-- Card --> */}
            <div className="skill-card">
                <div className="card-left">
                    <img src={fcc} alt="" className="skill-card-image" />
                </div>
                <div className="card-right">
                    <h3 className="label">JavaScript Algorithms and Data Structures</h3>
                    <p className="phar">Mastered core JavaScript, ES6, and solved coding problems using algorithms and data structures.</p>
                    <NavLink className='fcc' to='https://www.freecodecamp.org/certification/sasadusic/javascript-algorithms-and-data-structures' target="_blank" 
  rel="noopener noreferrer">View Certificate</NavLink>
                </div>
            </div>
            {/* <!-- Card --> */}
            </div>
        </div>
    </section>
    {/* <!-- Section --> */}
    <section className="inter">
        <h2 className="sub-header">Other Skills & Tools</h2>
        <div className="inter-cont">
            <div className="inter-col">
                <div className="flex">
                    <div className="inter-nike-cont"><i className="fa fa-check" aria-hidden="true"></i> </div>
                <h3 className="inder-col-header">Git & GitHub</h3>
                </div>
                        <p className="phar phar-bold">I use Git for version control and GitHub for collaborating on code, managing repositories, and contributing to open-source projects. I am confident in creating branches, resolving merge conflicts, and maintaining organized commit histories.</p>

                </div>
                <div className="inter-col">
                    <img src={nobg} alt="" className="inter-image" />
                </div>
                <div className="inter-col">
                <div className="flex">
                        <div className="inter-nike-cont"><i className="fa fa-check" aria-hidden="true"></i> </div>
                <h3 className="inder-col-header">Graphic Design Tools</h3>
                </div>
                        <p className="phar phar-bold">I have experience with design software like Photoshop, Illustrator, GIMP, and Inkscape. I use these tools for creating logos, UI mockups, image editing, and vector graphics to support both web and branding projects.</p>
    

            </div>
        </div>
    </section>
    {/* <!-- Section --> */}
    <section className="team">
        <img src={isoImage} alt="" className="team-image" />
        <div className="team-cont">
            <div className="team-left">
                <h2 className="label">FCC Projects Showcase</h2>
                <p className="phar phar-bold">On the left side of the menu, you’ll find five projects I completed for the freeCodeCamp Frontend Development Libraries certification.
These projects demonstrate my skills in React, Redux, Bootstrap, and other modern frontend tools and frameworks.
Each project meets the required user stories and is fully functional and responsive</p>
                <NavLink className="btn book" to='/'>See my Projects</NavLink>
            </div>
            <div className="team-right">
                <h2 className="label">About This Website</h2>
                <p className="phar phar-bold">This portfolio website is built using Vite, React, and React Router.
It is a frontend-only application, with no backend integration.
No CSS libraries were used – all styles were written from scratch using plain CSS.
The site is fully responsive and optimized for different screen sizes and devices.</p>
                <NavLink className="btn light" to="/me">GitHub repository</NavLink>

            </div>
        </div>
    </section>
    {/* <!-- Section --> */}
    </>
  )
}

export default Me