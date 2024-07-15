import React from "react";
import footer1 from "../../Images/img/footer1.jpg";
import footer2 from "../../Images/img/footer2.jpg";
import footer3 from "../../Images/img/footer3.jpg";
import footer4 from "../../Images/img/footer4.jpg";
import footer5 from "../../Images/img/footer5.jpg";
import footer6 from "../../Images/img/footer6.jpg";
import footerlogo from '../../Images/img/image.png'
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
                    <img src={footerlogo} alt="" style={{height:100}} />
                  </h1>
                  <p className="fst-italic">
                   "Here love finds the perfect match"
                  </p>
                  <ul className="mb-0">
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope col_brown me-1 align-middle" />
                        info@gmail.com
                      </a>
                    </li>
                    <li className="mt-3">
                      <a href="#">
                        <i className="fa fa-phone col_brown me-1 align-middle" />
                        + 91 8743901253 , 8168109705
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
                  <h5 className="mt-3 mb-4">WEDDING PLANNER FAQS</h5>
                  <ul className="mb-0">
                    <li>
                      <a href="#">Why Hire a Planner?</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">How Can I Make An Appointment?</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">How to Choose a Venue</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Event Catalogue</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Payment Types You Accept</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_1i">
                  <h5 className="mt-3 mb-4">ABOUT US</h5>
                  <h6 className="family_2 font_14 fw-normal">BRIDESMAIDS</h6>
                  <h6 className="fw-normal">
                    <a className="col_brown" href="#">
                      <i className="fa fa-circle me-1 font_8 align-middle" />
                      November 22, 2017
                    </a>
                  </h6>
                  <h6 className="family_2 font_14 fw-normal mt-3">GROOMSMEN</h6>
                  <h6 className="fw-normal">
                    <a className="col_brown" href="#">
                      <i className="fa fa-circle me-1 font_8 align-middle" />
                      November 26, 2017
                    </a>
                  </h6>
                  <h6 className="family_2 font_14 fw-normal mt-3">JEWELRY</h6>
                  <h6 className="fw-normal mb-0">
                    <a className="col_brown" href="#">
                      <i className="fa fa-circle me-1 font_8 align-middle" />
                      November 29, 2017
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_1i">
                  <h5 className="mt-3 mb-4">INSTAGRAM</h5>
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
              <div className="col-md-4">
                <div className="footer_2r text-end">
                  <ul className="text-uppercase font_13 mb-0">
                    <li className="d-inline-block">
                      <a href="#"> Facebook</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block">
                      <a href="#"> Twitter</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block">
                      <a href="#"> Pinterest</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block">
                      <a href="#"> Instagram</a>
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
