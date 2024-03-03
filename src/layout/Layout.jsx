import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
