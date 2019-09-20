import './layout.css';
import React from 'react';
import Styled from 'styled-components'
import { Container } from '@material-ui/core'
import NavBar from './navbar';
import Contact from './Contact';




const Layout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <main className="content">


    {children}

    </main>
    <Contact />
  </React.Fragment>
);

export default Layout;
