import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar({ setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const cartItems = useSelector((state) => state.cart); 
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="search-container"
                  style={{ position: "relative" }}
                >
                  <input
                    onChange={handleChange}
                    type="search"
                    placeholder="Search by category..."
                    className="form-control"
                    style={{ width: "200px" }}
                  />
                  <i
                    className="bi bi-search"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></i>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/cart" className="navbag">
                  <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
                  <span className="bag-quantity">{totalQuantity}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
