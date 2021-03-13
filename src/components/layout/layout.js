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
    {`
      <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M84LN6W"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
      `}
  </React.Fragment>
);

export default Layout;
