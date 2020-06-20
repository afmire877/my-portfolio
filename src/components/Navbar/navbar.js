import React from 'react';
import Logo from './../../../static/logo.svg';
import Styled from 'styled-components';
import { device } from '../Common/desktop';

const Nav = Styled.nav`
    display: flex;
    justify-content: flex-end;
    grid-column: 6 / 12;
    align-items: center;
    display: ${props => (props.home ? '' : 'none')};

    & a {
    margin-left: 40px;
    font-size: 1rem;
    text-transform: lowercase;
    text-decoration: none;
    color: ${props => (props.home ? 'white' : '#2634F2')};

    }
    @media ${device.mobileL} {
        display: none;
    }
`;

const Img = Styled.img`
    display: block;
    @media ${device.mobileL} {
        height: 50%;
    }
`;
const Header = Styled.header`

    position: ${props => (props.home ? 'absolute' : '')};
    filter: ${props =>
      props.home
        ? ''
        : 'invert(82%) sepia(99%) saturate(6787%) hue-rotate(243deg) brightness(95%) contrast(99%)'};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: calc(1em + 1vw) 0;

   &  h1 {
        grid-column: 2/2;
    }
`;

const NavBar = ({ home }) => {
  return (
    <Header home={home}>
      <h1>
        <a href="/">
          <Img home={home} src={Logo} alt="logo" />
        </a>
      </h1>
      <Nav home={home}>
        <a href="#projects">projects</a>
        <a href="#about">about</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact</a>
      </Nav>
    </Header>
  );
};

export default NavBar;
