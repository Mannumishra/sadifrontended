import React, { useEffect, useState } from "react";
import image2 from "../../Images/img/image2.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
const FindDetail = () => {
  const [details, setDetails] = useState({})
  const { _id } = useParams()

  const getsingleDetails = async () => {
    try {
      let res = await axios.get("https://api.sitarammarriagebureau.com/api/user/" + _id)
      setDetails(res.data.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getsingleDetails()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section id="blog" className="p_3">
        <div className="container-xl">
          <div className="blog_1 row">
            <div className="col-md-9">
              <div className="event_dt">
                <div className="event_dt1">
                  <h6 className="float-end mb-3">
                    August 9, 2021 @ 8:00 am - 5:00 pm
                  </h6>
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img src={details.image} className="w-100" alt="img25" />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="event_dt2 mt-4 border_1 p-4">
                  <div className="event_dt2i row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-3">
                          <h3 className="mb-3">Basic Details</h3>
                          <h6 className="family_2 font_14 lh-base">
                            Name: <br />
                            <span className="fw-normal text-muted">{details.name}</span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Age: <br />
                            <span className="fw-normal text-muted">
                              {details.age}
                            </span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Height: <br />
                            <span className="fw-normal text-muted">
                              {details.height}
                            </span>
                          </h6>
                          {/* <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Marital Status: <br />
                            <span className="fw-normal text-muted">
                              Never Merried
                            </span>
                          </h6> */}
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Religion: <br />
                            <span className="fw-normal text-muted">{details.religion}</span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Caste: <br />
                            <span className="fw-normal text-muted">
                              {details.cast}
                            </span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Education: <br />
                            <span className="fw-normal text-muted">
                              {details.education}
                            </span>
                          </h6>
                        </div>
                        <div className="col-md-4" style={{ marginTop: "35px" }}>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Sub Caste : <br />
                            <span className="fw-normal text-muted">{details.subcast}</span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Mother Gotra : <br />
                            <span className="fw-normal text-muted">{details.mgotra}</span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Grandmother Gotra : <br />
                            <span className="fw-normal text-muted">{details.ggotra}</span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Working Company Name : <br />
                            <span className="fw-normal text-muted">
                              {details.companyname}
                            </span>
                          </h6>
                          <h6 className="family_2 font_14 mt-3 mb-0 lh-base">
                            Annual Salary : <br />
                            <span className="fw-normal text-muted">{details.salary}</span>
                          </h6>
                        </div>

                        <div className="col-md-5">
                          <div className="event_dt2il">
                            <h3 className="mb-3">Contact Detail</h3>
                            <h6 className="family_2 font_14 lh-base">
                              Phone: <br />
                              <span className="fw-normal text-muted">
                                {details.phone}
                              </span>
                            </h6>
                            <h6 className="family_2 font_14 mt-3  lh-base">
                              Email <br />
                              <span className="fw-normal text-muted">
                                <a href="#">{details.email}</a>
                              </span>
                            </h6>
                            <h6 className="family_2 font_14 mt-3  lh-base">
                              Country, State <br />
                              <span className="fw-normal text-muted">
                                India, {details.state}
                              </span>
                            </h6>
                            <h6 className="family_2 font_14 mt-3  lh-base">
                              City <br />
                              <span className="fw-normal text-muted">
                                {details.city}
                              </span>
                            </h6>
                            <h6 className="family_2 font_14 mt-3  lh-base">
                              Pin <br />
                              <span className="fw-normal text-muted">
                                {details.pin}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-5">
                      <div className="event_dt2il">
                        <h3 className="mb-3">Address</h3>
                        <p>
                          {details.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="blog_1r">
                <div className="shop_1r1">
                  <div className="input-group border_1">
                    <input
                      type="text"
                      className="form-control border-0 rounded-0 font_14"
                      placeholder="Search..."
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-primary bg-white border-0 rounded-0 p-2 px-3"
                        type="button"
                      >
                        <i className="fa fa-search col_brown" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="shop_1r1 p-4 shadow_box p-4 mt-4">
                  <h4>Get in touch</h4>
                  <hr className="line" />
                  <ul className="mb-0 flex_box">
                    <li className="d-flex">
                      <span>
                        <i className="fa fa-map-marker col_brown me-3 align-middle fs-6" />
                      </span>
                      {details.address}
                    </li>
                    <li className="d-flex mt-3">
                      <span>
                        <i className="fa fa-envelope col_brown me-3 align-middle fs-6" />
                      </span>
                      <a href="#">{details.email}</a>
                    </li>
                    <li className="d-flex mt-3">
                      <span>
                        <i className="fa fa-phone col_brown me-3 align-middle fs-6" />
                      </span>
                      <a href="#">{details.phone}</a>
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

export default FindDetail;
