import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/Shoppingcart";
export default function Nav({ userData, logout }) {

  const { cartItems } = useShoppingCart();
  const [cartItemsNum, setcartItemsNum] = useState([])
  useEffect(() => {
    setcartItemsNum(cartItems);
  }, [cartItems])


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
            {userData && userData !== 'null' && userData.role === 'admin' ? (
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            ) : ''}
            <li>
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="Nav-btns d-flex">
            <Link to="/cart" className="btn btn-primary fw-bold mx-1 px-4 position-relative"> {/* Fix: use "/cart" instead of "cart" */}
              <i className="fas fa-shopping-bag"></i>
              <span className="badge rounded-pill badge-notification bg-danger position-absolute top-0">{cartItemsNum.length}</span>
            </Link>
            {!userData ? (
    <Link to="/signin"> {/* Fix: use "/signin" instead of "signin" */}
      <button className="btn btn-primary fw-bold mx-1">
        <i className="fas fa-user me-lg-2"></i>
        Login
      </button>
    </Link>

            ) : (
              <>
                <Link to="/profile"> {/* Fix: use "/profile" instead of "profile" */}
                  <button className="btn btn-primary fw-bold mx-1">
                    <i className="fas fa-user "></i>
                  </button>
                </Link>
                <button
                  className="btn btn-primary fw-bold mx-1"
                  onClick={logout}
                >
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
