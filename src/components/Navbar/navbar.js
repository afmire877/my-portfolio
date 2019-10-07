import './navbar.css'
import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Logo from './../../../static/logo.svg';







const NavBar = () => {



    return (
        <header className="header">
        <h1>
            <Link >
            <img src={Logo} alt="logo"/>
            </Link>
        </h1>
        <nav>
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="#contact">contact</Link>
        </nav>

        </header>
    );

}

export default NavBar;