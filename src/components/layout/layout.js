import './layout.css';
import React from 'react';
import NavBar from '../Navbar/navbar';




const Layout = ({ children, home }) => (
  
  <React.Fragment>
    <NavBar home={home} />
      <main >
        
          {children}

      </main>
    </React.Fragment>
);

export default Layout;
