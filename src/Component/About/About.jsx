import React from "react";
import "./About.css"
import image50 from "../../Images/img/image50.jpg";
import image51 from "../../Images/img/image51.jpg";
import image21 from "../../Images/img/image21.jpg";

const About = () => {
  return (
    <>
      <div className="center_main position-relative">
        <section id="center" className="pt-5 pb-5 center_o bg_light">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="font_50">About Us</h1>
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <ul className="mt-3 mb-0">
                  <li className="d-inline-block">
                    <a href="#">Home</a>
                  </li>
                  <li className="d-inline-block mx-2 text-muted">|</li>
                  <li className="d-inline-block col_brown"> About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="center_top">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12" />
            </div>
          </div>
        </section>
        <section id="center_bottom">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12" />
            </div>
          </div>
        </section>
      </div>
      <section id="about" className="p_3">
        <div className="container-xl">
          <div className="row about_1">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="about_1l position-relative">
                <div className="about_1l1">
                  <img className="img-fluid shadow_box p-1" alt="abc" src={image50} />
                </div>
                <div className="about_1l2 position-absolute">
                  <img className="img-fluid shadow_box p-1" alt="abc" src={image51} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_1r">
                <h6 className="col_brown">Welcome To Our Site</h6>
                <h1 className="mt-3 mb-3">We Are Sharing Everything With You Forever</h1>
                <p>
                  We offer the best food and drink service as per particular culture and taste. Our team makes sure to provide the best
                  <a className="col_brown" href="#">
                    catering arrangements
                  </a>
                  as it is the most important part of any wedding ceremony across the country! We have delivered fabulous wedding event experiences over the last two decades and are now experiencing a whole new growth story.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="about_1ri row">
                  <div className="col-2 col-md-2">
                    <div className="about_1ril">
                      <span className="col_brown font_60">
                        <i className="fa fa-leaf" />
                      </span>
                    </div>
                  </div>
                  <div className="col-10 col-md-10">
                    <div className="about_1rir">
                      <h3>We Bring Quality Services</h3>
                      <p className="mb-0">
                        Experience in events, hospitality, and wedding planning is certain to make your wedding memorable.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="about_1ri row">
                  <div className="col-2 col-md-2">
                    <div className="about_1ril">
                      <span className="col_brown font_60">
                        <i className="fa fa-dove" />
                      </span>
                    </div>
                  </div>
                  <div className="col-10 col-md-10">
                    <div className="about_1rir">
                      <h3>Forever Made With Love</h3>
                      <p className="mb-0">
                        We assure a wedding that is stress-free, relaxed, and enjoyable - the way a destination wedding should be!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
