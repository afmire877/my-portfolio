import './layout.css';
import React from 'react';
import NavBar from '../Navbar/navbar';
import { Container } from '@material-ui/core';




const Layout = ({ children }) => (
  
  <React.Fragment>
    <NavBar />
      <main >
        <Container>
          {children}
        </Container>
      </main>
    </React.Fragment>
);

export default Layout;
