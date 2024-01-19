import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbars />
      </header>
      <Outlet />
      {/* <footer>footer</footer> */}
    </>
  );
};

export default Layout;
