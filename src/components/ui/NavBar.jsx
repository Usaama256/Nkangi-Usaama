import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useScrollLock } from '../../store/ScrollLock';


import menuBtn from "../images/baseline_menu_white_24dp.png";
import menuClose from "../images/baseline_close_white_24dp.png";

const NavBar = () => {
    const [navLinksActive, setNavLinksActive] = useState(false);
    const {lockScroll, unlockScroll} = useScrollLock();

    useEffect(() => {
        if(navLinksActive){
            document.body.style.overflowY = "hidden"
            lockScroll();
        }else{
            unlockScroll();
        };
    //console.log(window.innerWidth, document.body.offsetWidth);
    }, [lockScroll, navLinksActive, unlockScroll]);

    return (
        <>
            <div className={"links-menu " +  (navLinksActive ? "links-menu-active" : null)}>
                <ul className="link-group">
                    <li className="link"><NavLink to="/" onClick={() => {setNavLinksActive(false)}} className={({isActive}) => isActive? "selected-link" : null}>Home</NavLink></li>
                    <li className="link"><NavLink to="/about" onClick={() => {setNavLinksActive(false)}} className={({isActive}) => isActive? "selected-link" : null}>About</NavLink></li>
                    <li className="link"><NavLink to="/projects" onClick={() => {setNavLinksActive(false)}} className={({isActive}) => isActive? "selected-link" : null}>Work</NavLink></li>
                    <li className="link"><NavLink to="/blogs" onClick={() => {setNavLinksActive(false)}} className={({isActive}) => isActive? "selected-link" : null}>Writing</NavLink></li>
                    <li className="link"><NavLink to="/contact" onClick={() => {setNavLinksActive(false)}} style={({isActive}) => ({
                        color: isActive? "#f0860c" : null
                    })}>Contact</NavLink></li>
                    <li><img src={menuClose} alt='' onClick={() => {setNavLinksActive(false)}} height='35' width="35" /></li>
                </ul>
            </div>
            <div className='menu-btn' onClick={() => {setNavLinksActive(true)}}>
                    <img src={menuBtn} alt='' height='24' width="25" className='btnMenu'/>
            </div>
            <nav className="navbar">
                <ul className="link-group">
                    <li className="link"><NavLink to="/" className={({isActive}) => isActive? "selected-link" : null}>Home</NavLink></li>
                    <li className="link"><NavLink to="/about" className={({isActive}) => isActive? "selected-link" : null}>About</NavLink></li>
                    <li className="link"><NavLink to="/projects" className={({isActive}) => isActive? "selected-link" : null}>Work</NavLink></li>
                    <li className="link"><NavLink to="/blogs" className={({isActive}) => isActive? "selected-link" : null}>Writing</NavLink></li>
                </ul>
                <ul className="link-group">
                    <li className="link"><NavLink to="/contact" style={({isActive}) => ({
                        color: isActive? "#f0860c" : null
                    })}>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
