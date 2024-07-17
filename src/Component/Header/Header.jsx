import React, { useState } from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";
import logo from '../../Images/img/image.png';

const Header = () => {
  const login = sessionStorage.getItem("login");
  const [open, setOpen] = useState(false);
  const [openIner, setOpenInner] = useState(false)

  const handleOpenInnerActive = () => {
    setOpenInner(!openIner)
  }

  const handleOpenDeActive = () => {
    setOpenInner(false)
  }

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleCloseMenu = () => {
    setOpen(false)
  }

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <section id="top" className="bg_brown pt-2 pb-2">
        {/* Top section content */}
      </section>

      <section id="header">
        <nav
          className="navbar navbar-expand-md navbar-light p-0 pt-2 pb-2"
          id="navbar_sticky"
        >
          <div className="container-xl">
            <Link className="p-0 navbar-brand fw-bold me-0 family_1 col_red" to="/">
              <img src={logo} alt="" style={{ height: 50 }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${open ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-0">
                <li className="nav-item">
                  <Link onClick={toggleCloseMenu} className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleCloseMenu} className="nav-link" to="/find_your_match">
                    Find Your Match
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleCloseMenu} className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleCloseMenu} className="nav-link" to="/event">
                    Events
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={handleOpenInnerActive}
                    aria-expanded={openIner ? "true" : "false"}
                    
                  >
                    Pages
                  </Link>
                  <ul className={`dropdown-menu ${openIner ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link onClick={toggleCloseMenu} className="dropdown-item" to="/story">
                        Story
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleCloseMenu} className="dropdown-item border-0" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link onClick={toggleCloseMenu} className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="logSign">
                {login ? (
                  <Link>
                    <button className="login" onClick={logout}>
                      Logout
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <button className="login">Login</button>
                    </Link>
                    <Link to={"/signUp"}>
                      <button className="signUp">SignUp</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
