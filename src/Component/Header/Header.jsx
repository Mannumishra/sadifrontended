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
     <section id="top" class="bg_brown pt-2 pb-2">
        <div class="container-xl">
          <div class="row top_1">
            <div class="col-md-6">
              <div class="top_1l mt-1">
                <ul class="mb-0 font_14">
                  <li class="text-white d-inline-block">
                    <i class="fa fa-phone me-1 align-middle col_dark"></i>
                    <a href="tel:+918743901253,8168109705" className="" style={{color:"white"}}>
                         +91 8743901253 , 8168109705
                      </a>
                  </li>
                  <li class="text-white d-inline-block ms-3">
                    <i class="fa fa-envelope me-1 align-middle col_dark"></i>
                    <a href="mailto:info@sitarammarriagebureau.com" className="" style={{color:"white"}}>
                     info@sitarammarriagebureau.com
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top_1r text-end">
                <ul class="mb-0 d-flex justify-content-end gap-3">
                  <li class="d-inline-block">
                    <a class="d-inline-block  text-center text-white" href="#">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a class="d-inline-block  text-center text-white" target="blank" href="https://www.instagram.com/mehndipur_balaji1008/?utm_source=qr&igsh=MjIwemo4ZWR6c3pi">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a class="d-inline-block  text-center text-white" href="#">
                      <i class="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                  <li class="d-inline-block">
                    <a class="d-inline-block  text-center text-white" href="#">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
