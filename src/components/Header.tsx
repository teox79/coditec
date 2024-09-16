import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';  // Import classNames
import logo from '/assets/img/logo.svg';
import GoogleTranslate from './Widget/GoogleTranslate';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
    const { state } = useAppContext();
    const { ui: manageUiData } = state;

    // State per gestire il menu mobile
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    // Funzione per gestire il click e attivare/disattivare la classe mobile-nav-active
    const handleMobileNavToggle = () => {
        setIsMobileNavActive(!isMobileNavActive);
    };

    // Funzione per chiudere il menu mobile quando si clicca su un link di navigazione
    const handleNavLinkClick = () => {
        setIsMobileNavActive(false);
    };

    // Variabile per gestire le classi del tag header
    const headerClassNames = classNames('header', 'd-flex', 'align-items-center', 'sticky-top', {
        'mobile-nav-active': isMobileNavActive,
    });

    const hamburgerClassNames = classNames('mobile-nav-toggle d-xl-none bi', {
        'bi-list': !isMobileNavActive,
        'bi-x': isMobileNavActive,
    });

    const navClassNames = classNames('navmenu', {
        'active': isMobileNavActive,
    });

    return (
        <header id="header" className={headerClassNames}>
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <NavLink to="/" className="logo d-flex align-items-center me-auto">
                    <img src={logo} className="img-fluid" width="200" height="130" alt="Logo" />
                </NavLink>

                <nav id="navmenu" className={navClassNames}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Chi siamo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Corsi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/mentors"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Mentors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Eventi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleNavLinkClick}
                            >
                                Galleria
                            </NavLink>
                        </li>
                    </ul>

                </nav>
                <div
                    className={hamburgerClassNames}
                    onClick={handleMobileNavToggle}
                ></div>
                <NavLink
                    className={({ isActive }) => `btn-getstarted ${isActive ? 'active' : ''}`}
                    to="/contact"
                    onClick={handleNavLinkClick}
                >
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
