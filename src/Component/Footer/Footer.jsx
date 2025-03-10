import React from "react";
import footer1 from "../../Images/img/footer1.jpg";
import footer2 from "../../Images/img/footer2.jpg";
import footer3 from "../../Images/img/footer3.jpg";
import footer4 from "../../Images/img/footer4.jpg";
import footer5 from "../../Images/img/footer5.jpg";
import footer6 from "../../Images/img/footer6.jpg";
import footerlogo from '../../Images/img/image.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section id="footer" className="p_3 px_4">
        <div className="container-fluid">
          <div className="footer_m bg_light p-4">
            <div className="footer_1 row">
              <div className="col-md-3">
                <div className="footer_1i">
                  <h1 className="mb-3">
                    {/* <a className="family_1" href="index.html">
                      <i className="fa fa-heart me-1 col_brown" /> Sita Ram
                      <br />
                      <span className="family_2 fw-normal font_14 col_brown">
                        Best Marriage Bureau 
                      </span>
                    </a> */}
                    <img src={footerlogo} alt="" style={{ height: 100 }} />
                  </h1>
                  <p className="fst-italic">
                    "Here love finds the perfect match"
                  </p>
                  <ul className="mb-0">
                    <li>
                      <a href="mailto:info@sitarammarriagebureau.com" className="col_brown me-1 align-middle">
                        <i className="fa fa-envelope" /> info@sitarammarriagebureau.com
                      </a>

                    </li>
                    <li className="mt-3">
                      <i class="fa fa-phone me-1 align-middle col_dark"></i>
                      <a href="tel:+918743901253,8168109705" className="" >
                        +91 8743901253 , 8168109705
                      </a>
                    </li>
                    <li className="mt-3">
                      <i className="fa fa-home col_brown me-1 align-middle" />
                      Old Delhi gurgaon road dundhara plot 49  Shital medical Store
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_1i">
                  <h5 className="mt-3 mb-4">QUICK LINKS</h5>
                  <ul className="mb-0">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="/find_your_match">Find Your Match</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="/event">Events</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="/contact">Contact</Link>
                    </li>
                    {/* <li className="mt-3">
                      <Link to="#">Payment Types You Accept</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_1i">
                  <h5 className="mt-3 mb-4">OTHER POLICY LINKS </h5>
                  <h6 className="family_2 font_14 fw-normal"><Link to='/returnpolicy'>RETURN & REFUND POLICY</Link></h6>
                  {/* <h6 className="fw-normal">
                    <a className="col_brown" href="#">
                      <i className="fa fa-circle me-1 font_8 align-middle" />
                      November 22, 2017
                    </a>
                  </h6> */}
                  <h6 className="family_2 font_14 fw-normal mt-3"><Link to='/term'>TERM & CONDITIONS</Link></h6>
                  <h6 className="family_2 font_14 fw-normal mt-3"><Link to='/privacy'>PRIVACY POLICY</Link></h6>

                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_1i">
                  <h5 className="mt-3 mb-4"></h5>
                  <div className="footer_1i1 row mx-0">
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer1}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer2}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer3}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_1i1 row mx-0">
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer4}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer5}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer6}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer6}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer1}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-0">
                      <div className="footer_1i1l">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={footer4}
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="footer_2 row">
              <div className="col-md-8">
                <div className="footer_2l">
                  <p className="mb-0">
                    © 2024 Sita Ram Best Marriage Bureau . All Rights Reserved |
                    Design by
                    <a
                      className="col_brown fw-bold"
                      href="https://www.digiindiasolutions.com/"
                    >
                      Digi India Solution
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="top_1r text-end">
                  <ul class="mb-0 d-flex justify-content-end gap-3">
                    <li class="d-inline-block">
                      <a class="d-inline-block  text-center text-white"  target="_blank" href="https://www.facebook.com/people/Sita-Ram-Marriage-Bureau/pfbid02KL7dazEBsK65ME6B2fg78ATqb2aPKF8RiQFBQLSoLX65Q3KZi6b6p4m1B1aVjtBRl/?mibextid=ZbWKwL">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a class="d-inline-block  text-center text-white"  target="_blank" href="https://www.instagram.com/mehndipur_balaji1008/?utm_source=qr&igsh=MjIwemo4ZWR6c3pi">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a class="d-inline-block text-center text-white" href="https://youtube.com/shorts/KSJpbIx_DqU?si=r90IGDCr8eJk4-rY" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
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
        </div>
      </section>
    </>
  );
};

export default Footer;
