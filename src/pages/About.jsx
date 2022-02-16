import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import BackGroundAndExp from './BackGroundAndExp';
import SkillsPage from './SkillsPage';

const About = () => {
    return (
        <>
            <section className='about-section'>
                <h2>I build value by Design</h2>
                <div className='about-details'>
                    <p>I'm Nkangi Usaama</p>
                    <p>
                        Currently living in Uganda pursuing a Bachelors Degree In Computer Science. 
                        I'm a self-motivated, creative, ambitious and goal-oriented IT professional 
                        with proficiency in writing and publishing Full-Stack MERN Web Applications 
                        (JavaScript, React.js, Express.js, MongoDB and Node.js). 
                    </p>
                    <p>
                        I've been honing my skill in Web Development for the previous years and I posses 
                        a strong willingness to continue learning to I provide Quality support to company's
                        IT team in Development and Deploying High Performance Web Applications.       
                    </p>
                    <p>
                        I strive to create elegant solutions that surprise and delight users, while keeping 
                        complex technical dependencies in mind for implementation, scalability and developer 
                        sanity.
                    </p>
                    <p>
                        <span className='body-links'><Link to="skills">My Skills {`>`}</Link></span>
                    </p>
                    <p>
                        <span className='body-links'><Link to="background_exprerience">Education And Experience {`>`}</Link></span>
                    </p>
                    <p>
                    <strong>Have an interesting project? <span className='body-links'><Link to="/contact">Let's talk</Link></span>.</strong>
                    </p>
                </div>
            </section>
            <section className='about-routes'>
                <Routes>
                    <Route path="skills" element={<SkillsPage />}/>
                    <Route path="background_exprerience" element={<BackGroundAndExp />}/>
                </Routes>
            </section>
        </>

    );
}

export default About;
