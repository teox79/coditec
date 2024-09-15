import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/assets/img/logo.svg';
import GoogleTranslate from './Widget/GoogleTranslate';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {

    const { state } = useAppContext();

    const { ui: manageUiData } = state;

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <NavLink to="/" className="logo d-flex align-items-center me-auto">
                    <img src={logo} className="img-fluid" width="200" height="130" alt="Logo" />
                </NavLink>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Chi siamo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Corsi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mentors" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Mentors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Eventi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Galleria
                            </NavLink>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <NavLink className={({ isActive }) => `btn-getstarted ${isActive ? 'active' : ''}`} to="/contact">
                    Contatti
                </NavLink>
                {manageUiData.HeaderUi?.showGoogleTranslatorWidget && (
                    <GoogleTranslate />
                )}

            </div>
        </header>
    );
};

export default Header;
