import React from "react";
// import { Outlet } from "react-router";
// import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <>
      <header className="container">
        <div className="d-flex justify-content-between py-4 ">
          <NavLink to="/" className="brand">
            <img src={logo} alt="logo for tvsFlix" className="img-fluid" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary fw-bold text-decoration-none fs-5 "
                : "text-light fw-bold text-decoration-none fs-5 navLink"
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
