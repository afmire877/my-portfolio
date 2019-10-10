import './navbar.css'
import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Logo from './../../../static/logo.svg';
import Styled from 'styled-components';
import { device } from '../Common/desktop'


const Nav = Styled.nav`
    @media ${device.mobileL} {
        display: none;
    }
`;

const Img = Styled.img`
    @media ${device.mobileL} {
        height: 50%;
    }
`


const NavBar = () => {



    return (
        <header className="header">
        <h1>
            <Link >
            <Img src={Logo} alt="logo"/>
            </Link>
        </h1>
        <Nav>
            <Link to="/">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="#contact">contact</Link>
        </Nav>

        </header>
    );

}

export default NavBar;