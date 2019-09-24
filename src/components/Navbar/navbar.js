import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components'





const NavBar = () => {

const Header = Styled.header`
    background-color: red;
`;

    return (
        <Header className="header">
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="#contact">CONTACT</Link>
        </Header>
    );

}

export default NavBar;