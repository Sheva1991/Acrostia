import React from 'react';
import navbar from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import AdaptiveMenu from './adaptive-menu/AdaptiveMenu';

const Nav = (props) => {
    return (
        <nav className={`${navbar.header}`}>
            <div className='container'>
                <div className='row'>
                    <div className={`col-md-3 order-2 order-md-1 ${navbar.logoWrap}
                     d-flex justify-content-center justify-content-md-start align-items-start align-items-md-center`}>
                        <NavLink to="/" activeClassName={navbar.active} className='text-decoration-none'>
                            <span className={`${navbar.logo} text-white`}>acrostia</span>
                        </NavLink>
                    </div>
                    <div className="col-md-9 order-1 order-md-2 p-0">
                        <AdaptiveMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;