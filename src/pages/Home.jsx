import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home-section">
            <p className="hero-heading">Hi, I'm Usaama</p>
            <p className='hero-profession'>{`=>`} Machine Learning Engineer</p>
            <p className='hero-profession'>{`=>`} Full-Stack Web Developer</p>
            <p className='hero-profession'>{`=>`} Product Designer</p>
            <p className='brief-Info'>Multidisciplinary Engineer Aimed At Providing Value through Software Development</p>
            <p className='hero-learnMore'><Link to="/about">Learn more {`>`}</Link></p>
        </section>
    );
}

export default Home;
