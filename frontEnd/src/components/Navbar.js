import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar  navbar-expand-sm ">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="#a">
         <h2 className="logo">HARSH</h2> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon bg-light" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                PORTFOLIAO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTECT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
