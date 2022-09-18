import React from "react";
import logo from "./image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header ">
      <div className="fixed-top">
        <div className="row contact bg-dark ">
          <div className="col-sm-3 col-5 d-flex justify-content-center align-items-center bg-dark">
            <div>
              <FontAwesomeIcon className=" text-warning " icon={faEnvelope} />
            </div>
            <div className="ms-2 email">zahediiuc221@gmail.com</div>
          </div>
          <div className="col-sm-6 col-4 d-flex justify-content-center align-items-center ">
            <div>
              <FontAwesomeIcon className="text-warning me-2" icon={faPhone} />
            </div>
            <div className="phone">8801819832618, 8801886132823</div>
          </div>
          <div className="col-sm-3 col-3 d-flex justify-content-center align-items-center ">
            <div>
              <NavLink className="contact-us " to="/Contact">
                CONTACT US
              </NavLink>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-success  px-lg-3 px-sm-2 ">
          <div class="container-fluid">
            <NavLink className="navbar-brand text-white fw-bold fs-2 " to="/">
              <img className="logo" src={logo} alt="..." />
              Beautiful Bangladesh
            </NavLink>
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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown me-3">
                  <NavLink
                    className="nav-link text-white dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </NavLink>
                  <ul
                    className="dropdown-menu bg-dark "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-dark text-white"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Mission & Vission
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown dropdown-dark me-3">
                  <NavLink
                    className="nav-link text-white dropdown-toggle dropdown-toggle-dark"
                    to="/CoxsBazar"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cox's Bazar
                  </NavLink>
                  <ul
                    className="dropdown-menu bg-dark "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-dark text-white"
                        to="/Coxsbazar"
                      >
                        Saint Martin
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Himchori
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Inani Beach
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown me-3">
                  <NavLink
                    className="nav-link text-white dropdown-toggle"
                    to="/Rangamati"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Rangamati
                  </NavLink>
                  <ul
                    className="dropdown-menu bg-dark "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-dark text-white"
                        to="/Rangamati"
                      >
                        Sajek Valley
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Shuvolong
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Kaptai Lake
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown me-3">
                  <NavLink
                    className="nav-link text-white dropdown-toggle"
                    to="/Sylhet"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sylhet
                  </NavLink>
                  <ul
                    className="dropdown-menu bg-dark "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-dark text-white"
                        to="/Sylhet"
                      >
                        Tea Garden
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Jaflong
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-dark" to="#">
                        Ratargul
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item me-3">
                  <NavLink className="nav-link text-white " to="/Dhaka">
                    Dhaka
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
