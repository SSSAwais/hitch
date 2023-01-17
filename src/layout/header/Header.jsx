import React from "react";
import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid p-0">
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className="img-fluid"/>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav align-items-center">
                    <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Help
                        </a>
                        <ul
                          className="dropdown-menu align-items-center"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {/* <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li> */}
                        
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#extraIncome"
                        >
                          Driver
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Support
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#get_Started" className="nav-link get_started">

                          Get Started
                        </a>
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
