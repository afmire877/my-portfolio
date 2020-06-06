import "./layout.css";
import React from "react";
import NavBar from "../Navbar/navbar";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, home }) => (
  <React.Fragment>
    <NavBar home={home} />
    <main>{children}</main>
  </React.Fragment>
);

export default Layout;
