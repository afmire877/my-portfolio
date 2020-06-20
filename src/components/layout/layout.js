import './layout.css';
import React from 'react';
import NavBar from '../Navbar/navbar';
import SEO from '../SEO/SEO';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, home }) => (
  <React.Fragment>
    <SEO />
    <NavBar home={home} />
    <main>{children}</main>
  </React.Fragment>
);

export default Layout;
