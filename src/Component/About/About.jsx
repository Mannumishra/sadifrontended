import React from "react";

import image50 from "../../Images/img/image50.jpg";
import image51 from "../../Images/img/image51.jpg";
import image21 from "../../Images/img/image21.jpg";

const About = () => {
  return (
    <>
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
              <div className="col-md-6">
                <div className="about_1l position-relative">
                  <div className="about_1l1">
                    <img className="shadow_box p-1" alt="abc" src={image50} />
                  </div>
                  <div className="about_1l2 position-absolute">
                    <img className="shadow_box p-1" alt="abc" src={image51} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about_1r">
                  <h6 className="col_brown">Welcome To Our Site</h6>
                  <h1 className="mt-3 mb-3">
                    We Are Sharing Everything With You Forever
                  </h1>
                  <p>
                    We offer the best food and drink service as per particular
                    culture and taste Our Team make sure for the best
                    <a className="col_brown" href="#">
                      catering arrangements
                    </a>
                    as it is the most important part any wedding ceremony in all
                    over country! We have delivered fabulous wedding event
                    experiences over the last two decades and are now out a
                    whole new growth story.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                  <div className="about_1ri row">
                    <div className="col-md-2">
                      <div className="about_1ril">
                        <span className="col_brown font_60">
                          <i className="fa fa-leaf" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="about_1rir">
                        <h3>We Bring Quality Services</h3>
                        <p className="mb-0">
                          Experience in events, hospitality and wedding planning
                          is certain to make your wedding memorable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="about_1ri row">
                    <div className="col-md-2">
                      <div className="about_1ril">
                        <span className="col_brown font_60">
                          <i className="fa fa-dove" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="about_1rir">
                        <h3>Forever Made With Love</h3>
                        <p className="mb-0">
                          We assure a wedding that is stress-free, relaxed and
                          with enjoyable &amp; the way a destination wedding
                          should be!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="book" className="p_3 bg_light">
          <div className="container-xl">
            <div className="row book_1">
              <div className="col-md-6">
                <div className="book_1l">
                  <h1>Professional Photographer</h1>
                  <p className="mt-3">
                    Wedding photographers is provide a very special service to
                    the society, giving shape to the manner in which families
                    remember the day they came all together for celebrations.
                  </p>
                  <h6 className="center_sm">
                    <a className="button_1" href="#">
                      Read More
                    </a>
                  </h6>
                  <h6 className="mt-4">
                    Wedding Photography <span className="float-end">54%</span>
                  </h6>
                  <div className="progress-bar mt-3">
                    <div className="progress" style={{ width: "54%" }}></div>
                  </div>
                  <h6 className="mt-3">
                    Fashion Photography <span className="float-end">42%</span>
                  </h6>
                  <div className="progress-bar mt-3">
                    <div className="progress" style={{ width: "42%" }}></div>
                  </div>
                  <h6 className="mt-3">
                    Event Photography <span className="float-end">48%</span>
                  </h6>
                  <div className="progress-bar mt-3">
                    <div className="progress" style={{ width: "48%" }}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="book_1r">
                  <h1>Available Booking Dates</h1>
                  <p className="mt-3">
                    Made for photographers, artists, designers and small
                    businesses .Get our emails on inspiration &amp; tips to grow
                    your creative business.
                  </p>
                  <div className="book_1ri row">
                    <div className="col-md-6">
                      <div className="book_1ril">
                        <input
                          placeholder="Name*"
                          className="form-control border-0 rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="book_1ril">
                        <input
                          placeholder="Phone"
                          className="form-control border-0 rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="book_1ri row">
                    <div className="col-md-6">
                      <div className="book_1ril">
                        <input
                          placeholder="Email*"
                          className="form-control border-0 rounded-3 mt-3"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="book_1ril">
                        <input
                          placeholder="Wedding Dates"
                          className="form-control border-0 rounded-3 mt-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="book_1ri row">
                    <div className="col-md-12">
                      <div className="book_1ril">
                        <textarea
                          placeholder="Your Message"
                          className="form-control form_text border-0 rounded-3 mt-3"
                          defaultValue={""}
                        />
                        <h6 className="mt-3">
                          <a className="button_1 d-block text-center" href="#">
                            Check here
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section id="recep" className="p_3">
          <div className="container-xl">
            <div className="row story_1 text-center mb-4">
              <div className="col-md-12">
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <h1 className="font_50">Wedding Events</h1>
              </div>
            </div>
            <div className="row recep_1">
              <div className="col-md-4">
                <div className="recep_1l p-4 shadow_box text-center">
                  <span className="font_60  col_brown">
                    <i className="fa fa-hotel" />
                  </span>
                  <h3 className="mt-2 mb-4">The Reception</h3>
                  <ul>
                    <li>Saturday, 15 Oct, 2021</li>
                    <hr />
                    <li>12:00 PM – 4:40 PM</li>
                    <hr />
                    <li>Los Porta NZ49</li>
                    <hr />
                    <li>12 East 26th Stu London</li>
                    <hr />
                    <li>16 West 25th Str Usa</li>
                  </ul>
                  <h6 className="mb-0 mt-4">
                    <a className="button_1" href="#">
                      View Map
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recep_1l p-4 shadow_box text-center">
                  <span className="font_60  col_brown">
                    <i className="fa fa-ring" />
                  </span>
                  <h3 className="mt-2 mb-4">Ring Ceremony</h3>
                  <ul>
                    <li>Saturday, 15 Oct, 2021</li>
                    <hr />
                    <li>12:00 PM – 4:40 PM</li>
                    <hr />
                    <li>Los Porta NZ49</li>
                    <hr />
                    <li>12 East 26th Stu London</li>
                    <hr />
                    <li>16 West 25th Str Usa</li>
                  </ul>
                  <h6 className="mb-0 mt-4">
                    <a className="button_1" href="#">
                      View Map
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recep_1l p-4 shadow_box text-center">
                  <span className="font_60  col_brown">
                    <i className="fa fa-music" />
                  </span>
                  <h3 className="mt-2 mb-4">The DJ Party</h3>
                  <ul>
                    <li>Saturday, 15 Oct, 2021</li>
                    <hr />
                    <li>12:00 PM – 4:40 PM</li>
                    <hr />
                    <li>Los Porta NZ49</li>
                    <hr />
                    <li>12 East 26th Stu London</li>
                    <hr />
                    <li>16 West 25th Str Usa</li>
                  </ul>
                  <h6 className="mb-0 mt-4">
                    <a className="button_1" href="#">
                      View Map
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    </>
  );
};

export default About;
