import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './adaptiveMenu.scss'



const AdaptiveMenu = (props) => {
    const [navOpen, setNavOpen] = useState(0)
    return (
        <div>
            {navOpen ? <button className={`toggler`} onClick={() => { setNavOpen(!navOpen) }}><i className="fas fa-times"></i></button> :
                <button className={`toggler`} onClick={() => { setNavOpen(!navOpen) }}><i className="fas fa-bars"></i></button>}
            <ul className={`list-unstyled text-white menu ${navOpen ? 'menu--active' : ''}`}>
                <li className={`menu__item`}>
                    <NavLink to="/" activeClassName={'active'} onClick={() => { setNavOpen(!navOpen) }}>Home</NavLink>
                </li>
                <li className={`menu__item`}>
                    <NavLink to="/Services" activeClassName={'active'} onClick={() => { setNavOpen(!navOpen) }}>Services</NavLink>
                </li>
                <li className={`menu__item`}>
                    <NavLink to="/About" activeClassName={'active'} onClick={() => { setNavOpen(!navOpen) }}>About</NavLink>
                </li>
                <li className={`menu__item`}>
                    <NavLink to="/Work" activeClassName={'active'} onClick={() => { setNavOpen(!navOpen) }}>Work</NavLink>
                </li>
                <li className={`menu__item`}>
                    <NavLink to="/Contacts" activeClassName={'active'} onClick={() => { setNavOpen(!navOpen) }}>Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AdaptiveMenu;