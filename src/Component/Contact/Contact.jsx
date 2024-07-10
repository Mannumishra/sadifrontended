import React from "react";

const Contact = () => {
  return (
    <>
      <>
        <div className="center_main position-relative">
          <section id="center" className="pt-5 pb-5 center_o bg_light">
            <div className="container-xl">
              <div className="row center_o1 text-center">
                <div className="col-md-12">
                  <h1 className="font_50">Contact Us</h1>
                  <span className="col_brown icon_dove fs-2">
                    <i className="fa fa-dove" />
                  </span>
                  <ul className="mt-3 mb-0">
                    <li className="d-inline-block">
                      
                      <a href="#">Home</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block col_brown"> Contact Us</li>
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
        <section id="contact" className="p_3">
          <div className="container-xl">
            <div className="contact_1 row">
              <div className="col-md-4 p-0">
                <div className="contact_1l shadow_box p-4">
                  <h4>Address : </h4>
                  <p className="mt-3">
                  Old Delhi gurgaon road dundhara plot 49  Shital medical Store
                  </p>
                  <hr />
                  <h6 className="mb-0">
                    <a className="col_brown" target="blank" href="https://www.google.com/maps/place/28%C2%B030'54.1%22N+77%C2%B004'38.6%22E/@28.515013,77.074816,16z/data=!4m4!3m3!8m2!3d28.5150278!4d77.0773889?hl=en&entry=ttu">
                      View On Google Map
                    </a>
                  </h6>
                </div>
              </div>
              {/* <div className="col-md-4 p-0">
                <div className="contact_1l shadow_box bg_brown p-4 contact_1lo">
                  <h4 className="text-white">Address Two</h4>
                  <p className="mt-3 text-light">
                    1378 Porta Rs Semper New York 12345 United States.
                  </p>
                  <hr />
                  <h6 className="mb-0">
                    <a className="text-white" href="#">
                      View On Google Map
                    </a>
                  </h6>
                </div>
              </div> */}
              <div className="col-md-4 p-0">
                <div className="contact_1l shadow_box p-4">
                  <h4>Email &amp; Office Hours</h4>
                  <p className="mt-3">
                    Mon – Sat: 9.00am to 7.00pm <br />
                    Sunday: Closed
                  </p>
                  <hr />
                  <h6 className="mb-0">
                    <a className="col_brown" href="#">
                      info@gmail.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="contact_2 row mt-5">
              <div className="col-md-5">
                <div className="contact_2l">
                  <h5 className="col_brown">Wedding Attend</h5>
                  <h1 className="mt-3">It’s Your Turn</h1>
                  <p className="mt-3 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="contact_2li row">
                    <div className="col-md-2">
                      <div className="contact_2lil text-center">
                        <span className="col_brown font_50 lh-1">
                          <i className="fa fa-map" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="contact_2lir px-4">
                        <h4>Location</h4>
                        <p className="mb-0">Old Delhi gurgaon road dundhara plot 49  Shital medical Store</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact_2li row mt-4">
                    <div className="col-md-2">
                      <div className="contact_2lil text-center">
                        <span className="col_brown font_50 lh-1">
                          <i className="fa fa-file" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="contact_2lir px-4">
                        <h4>Call Or Email</h4>
                        <p className="mb-0">
                          +91 - +911244408859 <br />
                          info@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact_2li row mt-4">
                    <div className="col-md-2">
                      <div className="contact_2lil text-center">
                        <span className="col_brown font_50 lh-1">
                          <i className="fa fa-clock" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="contact_2lir px-4">
                        <h4>Office Hours</h4>
                        <p className="mb-0">
                          Mon – Sat: 9.00am to 7.00pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact_2r border_1 p-4">
                  <h4>Do You Have Any Questions?</h4>
                  <div className="row quote_2 mt-4">
                    <div className="col-md-6">
                      <div className="quote_2l">
                        <input
                          placeholder="Name*"
                          className="form-control rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="quote_2l">
                        <input
                          placeholder="Email*"
                          className="form-control rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row quote_2 mt-4">
                    <div className="col-md-6">
                      <div className="quote_2l">
                        <input
                          placeholder="Phone"
                          className="form-control rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="quote_2l">
                        <input
                          placeholder="Event"
                          className="form-control rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row quote_2 mt-4">
                    <div className="col-md-12">
                      <div className="quote_2l">
                        <input
                          placeholder="Subject"
                          className="form-control rounded-3"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row quote_2 mt-4">
                    <div className="col-md-12">
                      <div className="quote_2l">
                        <textarea
                          placeholder="Write a Message"
                          className="form-control rounded-3 form_text"
                          defaultValue={""}
                        />
                        <h6 className="mt-4 mb-0">
                          <a className="button_1 d-block text-center" href="#">
                            
                            Send A Message
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row contact_3 mt-5">
              <div className="col-md-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.8216472568793!2d77.07481587549655!3d28.515013275729093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzU0LjEiTiA3N8KwMDQnMzguNiJF!5e0!3m2!1sen!2sin!4v1720421806953!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Contact;
