import React from "react";
import "../Header/header.css";
import { Link} from "react-router-dom";
import logo from '../../Images/img/image.png'
const Header = () => {
  const login = sessionStorage.getItem("login")

  
  // alert(login)

  const logout = () => {
    sessionStorage.clear()
    window.location.href = "/login"
  }
  return (
    <>
      <section id="top" className="bg_brown pt-2 pb-2">
        <div className="container-xl">
          <div className="row top_1">
            <div className="col-md-6">
              <div className="top_1l mt-1">
                <ul className="mb-0 font_14">
                  <li className="text-white d-inline-block">
                    <i className="bi bi-facebook me-1 align-middle col_dark"></i>
                    +91 - 8743901253
                  </li>
                  <li className="text-white d-inline-block ms-3">
                    <i className="bi bi-envelope me-1 align-middle col_dark"></i>
                    info@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top_1r text-end">
                <ul className="mb-0 d-flex justify-content-end gap-3">
                  <li className="d-inline-block">
                    <Link className="d-inline-block  text-center text-white" to="#">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="d-inline-block">
                    <Link className="d-inline-block  text-center text-white" to="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="d-inline-block">
                    <Link className="d-inline-block  text-center text-white" to="#">
                      <i className="fa-brands fa-pinterest"></i>
                    </Link>
                  </li>
                  <li className="d-inline-block">
                    <Link className="d-inline-block  text-center text-white" to="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="header">
        <nav
          className="navbar navbar-expand-md navbar-light  p-0 pt-2 pb-2"
          id="navbar_sticky"
        >
          <div className="container-xl">
            <Link className="p-0 navbar-brand fw-bold me-0 family_1 col_red" to="/">
              {/* <i className="fa fa-heart me-1 col_brown"></i> Sita Ram
              <br />
              <span className="family_2 fw-normal font_14 col_brown">
                Best Marriage Bureau 
              </span> */}
              <img src={logo} alt="" style={{height:50}} />
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
            <div
              className="collapse navbar-collapse"
              style={{ alignItems: "center" }}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-0 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/find_your_match">
                    Find Your Match
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/event">
                    Events
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul
                    className="dropdown-menu drop_1"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/story">
                        Story
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item border-0" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="logSign">
                {
                  login ? <Link><button className="login" onClick={logout}>Logout</button></Link> :
                    <>
                      <Link to={"/login"}>
                        <button className="login">Login</button>
                      </Link>
                      <Link to={"/signUp"}>
                        <button className="signUp">SignUp</button>
                      </Link>
                    </>
                }
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
