import React from "react";
import indiaFlag from "./assets/images/indianflag.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Nav() {
  return (
    <header>
      <div className="navbar pt-4 mb-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="navbar-left">
              <div className="navbar-top">
                <ul className="nav-list d-flex align-items-center">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      New
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      pre-owned
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-list">
                <ul className="nav-list d-flex align-items-center flex-wrap mb-3 mb-lg-0">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      just in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      brands
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      women
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      men
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      kids
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a href="/" className="nav-link">
                      watches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      jewellery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      indie luxe
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      le prestige
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link text-sale">
                      sale
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      auctions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-right">
              <ul className="d-flex align-items-center mb-3">
                <li>
                  <a href="/" className="btn btn-black me-3">
                    Sell with us
                  </a>
                </li>
                <li>
                  <Tippy content="Profile">
                    <a href="/" className="text-reset me-3">
                      <i className="fa-regular fa-user" aria-hidden="true"></i>
                    </a>
                  </Tippy>
                </li>
                <li>
                  <a href="/" className="me-3">
                    <img
                      src={indiaFlag}
                      alt="indian flag"
                      className="img-fluid w-25"
                    />
                  </a>
                </li>
                <li>
                  <Tippy content="Favourites">
                    <a href="/" className="text-reset me-3">
                      <i className="fa-regular fa-heart" aria-hidden="true"></i>
                    </a>
                  </Tippy>
                </li>
                <li>
                  <Tippy content="Add to Cart">
                    <a href="/" className="text-reset me-3 position-relative">
                      <i
                        className="fa-solid fa-bag-shopping"
                        aria-hidden="true"
                      ></i>
                      <span className="not-count">3</span>
                    </a>
                  </Tippy>
                </li>
              </ul>
              <form action="" className="search mb-2">
                <div className="d-flex align-items-center search-wrap">
                  <input
                    name="search"
                    className="form-control"
                    placeholder="What Are You Looking For"
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
