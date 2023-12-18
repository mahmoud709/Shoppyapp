import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ userData, logout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container">
        <Link className="navbar-brand text-capitalize fw-bold" to="/">
          <span className="text-primary">SHOPPY</span>KART
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Catogories
              </Link>
              <ul className="dropdown-menu">
                <li className="text-end">
                  <Link className="dropdown-item " to="/">
                    Mens
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="text-end">
                  <Link className="dropdown-item" to="#">
                    Womens
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="text-end">
                  <Link className="dropdown-item" to="#">
                    Childs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="Nav-btns d-flex">
            <Link to="cart" className="btn btn-primary fw-bold mx-1">
              <span className="fas fa-shopping-bag me-lg-2"></span>
              Cart
            </Link>
            {!userData ? (
              <Link to="signin">
                <button className="btn btn-primary fw-bold mx-1">
                  <i className="fas fa-user me-lg-2"></i>
                  Login
                </button>
              </Link>
            ) : (
              <>
                <Link to="profile">
                  <button className="btn btn-primary fw-bold mx-1">
                    <i className="fas fa-user me-lg-2"></i>
                    Profile
                  </button>
                </Link>
                <button
                  className="btn btn-primary fw-bold mx-1" onClick={logout}>
                  <i className="me-lg-2"></i>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
