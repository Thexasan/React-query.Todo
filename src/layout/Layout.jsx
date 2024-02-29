import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
