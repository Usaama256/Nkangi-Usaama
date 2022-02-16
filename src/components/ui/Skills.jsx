import React from 'react';

import htmlImage from "../images/html.png";
import reactImage from "../images/reactjs.png";
import jsImage from "../images/js.png";
import nodeImage from "../images/nodejs.png";


const Skills = () => {
    return (
        <div className="skill-section">
            <h1 className="heading">skills</h1>
            <div className="skills-container">
                <div className="skill-card">
                    <img src={htmlImage} className="skill-img" alt="" />
                    <div className="skill-level">98%</div>
                    <h1 className="skill-name">HTML</h1>
                    <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                </div>
                <div className="skill-card">
                    <img src={reactImage} className="skill-img" alt="" />
                    <div className="skill-level">100%</div>
                    <h1 className="skill-name">REACT JS</h1>
                    <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                </div>
                <div className="skill-card">
                    <img src={jsImage} className="skill-img" alt="" />
                    <div className="skill-level">90%</div>
                    <h1 className="skill-name">JavaScript</h1>
                    <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                </div>
                <div className="skill-card">
                    <img src={nodeImage} className="skill-img" alt="" />
                    <div className="skill-level">86%</div>
                    <h1 className="skill-name">Node JS</h1>
                    <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                </div>
                <div className="skill-card">
                    <img src={htmlImage} className="skill-img" alt="" />
                    <div className="skill-level">98%</div>
                    <h1 className="skill-name">CSS</h1>
                    <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
