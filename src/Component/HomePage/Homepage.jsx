import React, { useEffect, useState } from "react";
import image6 from "../../Images/img/image6.png";
import image7 from "../../Images/img/image7.png";
import image8 from "../../Images/img/image8.png";
import image9 from "../../Images/img/image9.jpg";
import image10 from "../../Images/img/image10.png";
import image15 from "../../Images/img/image15.jpg";
import image16 from "../../Images/img/image16.jpg";
import image17 from "../../Images/img/image17.jpg";
import image23 from "../../Images/img/image23.png";
import image32 from "../../Images/img/image32.jpg";
import image12 from "../../Images/img/image12.jpg";
import image44 from "../../Images/img/image44.jpg";
import image45 from "../../Images/img/image45.jpg";
import image46 from "../../Images/img/image46.jpg";
import '../HomePage/homepage.css'
import axios from "axios";
import Event from "../Events/Event";
const Homepage = () => {
  const [banner, setBanner] = useState([])

  const getBanner = async () => {
    try {
      let res = await axios.get("https://api.sitarammarriagebureau.com/api/banner")
      console.log(res)
      setBanner(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [bride, setBride] = useState([])

  const getBride = async () => {
    try {
      let res = await axios.get("https://api.sitarammarriagebureau.com/api/bride")
      console.log(res)
      setBride(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBanner()
    getBride()
  }, [])
  return (
    <>
      {/* carousel */}
      <div className="center_main position-relative">
        <section id="center" className="center_home">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
            </div>
            <div className="carousel-inner">
              {banner.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={item.image} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-md-block">
                    <span className="col_red font_60 lh-1">
                      <i className="fa fa-leaf"></i>
                    </span>
                    <h1 className="text-white font_60 mt-3">
                      Made With <span className="col_red">Love</span>
                    </h1>
                    <p>
                      They are seeking a life partner who shares their zest for life, values mutual respect and understanding, and is ready to embark on an adventurous journey of love, growth, and companionship together.
                    </p>
                    <h6 className="mb-0 mt-4">
                      <a className="button" href="#">
                        We Can Help
                      </a>
                    </h6>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section id="center_top">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </section>
        <section id="center_bottom">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </section>
      </div>
      {/* carousel-end */}

      {/* dulha name */}
      <section id="about_h" className="p_3">
        <div className="container-xl">
          <div className="about_hm position-relative">
            <div className="about_hm1">
              <div className="row about_h1">
                <div className="col-md-2">
                  <div className="about_h1n"></div>
                </div>
                <div className="col-md-4">
                  <div className="about_h1l shadow_box p-3 rounded-circle">
                    <img src={image6} alt="abc" className="w-100 rounded-circle" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_h1r">
                    <h1 className="font_60">Preeti Mishra</h1>
                    <p className="mt-3">
                      Their eyes meet, and they exchange a nervous laugh as they introduce themselves. The initial awkwardness melts away as they bond over shared interests and stories they've already exchanged online. Time seems to fly by as they lose themselves in conversation, discovering mutual hobbies, dreams, and aspirations
                    </p>
                    <ul className="mt-4 mb-0 social_tag">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row about_h1 mt-4">
                <div className="col-md-6">
                  <div className="about_h1r text-end">
                    <h1 className="font_60">Harsh Vardhan</h1>
                    <p className="mt-3">
                      By the end of their meeting, both Neha and Raj feel a spark of connection that goes beyond words. They part with promises to meet again soon, excited about the potential of what lies ahead.
                    </p>
                    <ul className="mt-4 mb-0 social_tag">
                      <li className="d-inline-block">
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="d-inline-block ms-1">
                        <a href="#">
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about_h1l shadow_box p-3 rounded-circle">
                    <img src={image7} alt="abc" className="w-100 rounded-circle" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="about_h1n"></div>
                </div>
              </div>
            </div>
            <div className="about_hm2 position-absolute">
              <img src={image8} />
            </div>
            <div className="about_hm3 position-absolute">
              <img src={image8} />
            </div>
            <div className="about_hm4 position-absolute">
              <img src={image8} />
            </div>
          </div>
        </div>
      </section>
      {/* dulha name end */}

      {/* sweet story */}
      <section id="story" className="sweetStory p_3">
        <div className="container-xl">
          <div className="row story_1 text-center mb-4">
            <div className="col-md-12">
              <span className="col_brown icon_dove fs-2">
                <i className="fa fa-dove"></i>
              </span>
              <h1 className="font_50">Our Sweet Story</h1>
            </div>
          </div>
          <div className="row story_2 text-center">
            <div className="col-md-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge">
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h1 className="timeline-title">First Time We Meet</h1>
                      <h6 className="mt-3 mb-3">
                        <i className="fa fa-clock me-1 col_brown"></i> 19 Jan 2018
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        The bustling ambiance of a quaint bookstore cafe, where the scent of freshly brewed coffee mingles with the aroma of old books.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning">
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="timeline-panel">
                    <img alt="abc" className="w-100" src={image9} />
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger">
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h1 className="timeline-title">She Said Yes!</h1>
                      <h6 className="mt-3 mb-3">
                        <i className="fa fa-clock me-1 col_brown"></i> 22 Feb 2018
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Sarah nervously flips through the pages of a novel, stealing glances towards the cafe entrance. She had agreed to meet James after weeks of engaging conversations online. As he walks in, Sarah's heart skips a beat.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge " style={{backgroundColor:"#842D60"}}>
                    <i className="fa fa-heart"></i>
                  </div>
                  <div className="timeline-panel">
                    <img alt="abc" className="w-100" src={image10} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* sweet story-end */}

      {/* captured moment */}
      <section id="moment" className="p_3">
        <div className="container-xl">
          <div className="row story_1 text-center mb-4">
            <div className="col-md-12">
              <span className="col_brown icon_dove fs-2">
                <i className="fa fa-dove" />
              </span>
              <h1 className="font_50">Sweet Captured Moments</h1>
            </div>
          </div>
          <div className="row moment_1">
            <div className="col-md-4">
              <div className="moment_1l">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image12} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal1"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image12} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="moment_1l mt-3">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image44} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center moment_1li2o">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal2"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image44} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="moment_1l">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image45} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center moment_1li2o">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal3"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal3"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image45} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="moment_1l mt-3">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image15} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal4"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal4"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image15} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="moment_1l">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image16} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal5"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal5"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image16} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="moment_1l mt-3">
                <div className="moment_1li position-relative">
                  <div className="moment_1li1">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src={image46} className="w-100" alt="img25" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="moment_1li2 position-absolute text-center moment_1li2o">
                    <span className="fs-2">
                      <a
                        data-bs-target="#exampleModal6"
                        data-bs-toggle="modal"
                        href="#"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal6"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <img src={image46} className="w-100" alt="abc" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* captured moment-end */}

      {/* bride */}
      <section id="bride" className="p_3">
        <div className="container-xl">
          <div className="row story_1 text-center mb-4">
            <div className="col-md-12">
              <span className="col_brown icon_dove fs-2">
                <i className="fa fa-dove" />
              </span>
              <h1 className="font_50"> Grooms &amp; Brides </h1>
            </div>
          </div>
          <div className="row bride_1">
            {
              bride.map((item, index) =>
                <div className="col-md-4" key={index}>
                  <div className="bride_1i position-relative">
                    <div className="bride_1i1">
                      <img src={image23} alt="abc" className="w-100" />
                    </div>
                    <div className="bride_1i2 text-center position-absolute top-0 w-100 h-100">
                      <div className="about_h1l shadow_box p-3 rounded-circle">
                        <img
                          src={item.image}
                          alt="abc"
                          className="w-100 rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="bride_1i2n text-center">
                      <h1 className="mt-3">{item.name}</h1>
                      <h6 className="col_brown mb-0">{item.bridename}</h6>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
      {/* bride-end */}


      {/* wedding package */}
      <section id="price" className="p_3 px_4">
        <div className="container-fluid">
          <div className="price_m position-relative">
            <div className="price_m1 position-absolute w-100 pt-5 top-0">
              <div className="row story_1 text-center mb-4">
                <div className="col-md-12">
                  <span className="col_brown icon_dove fs-2">
                    <i className="fa fa-dove" />
                  </span>
                  <h1 className="font_50">Wedding Packages</h1>
                </div>
              </div>
            </div>
            <div className="price_m2">
              <div className="price_1 row">
                <div className="col-md-12">
                  <img className="w-100" alt="abc" src={image32} />
                </div>
              </div>
            </div>
            <div className="price_m3 position-absolute">
              <div className="price_2 row">
                <div className="col-md-4">
                  <div className="price_2i text-center shadow_box p-4 bg-white">
                    <h5 className="fw-normal">BASIC</h5>
                    <h6 className="col_brown mt-3 fst-italic">
                    ₹ <span className="fs-1">501</span>
                    </h6>
                    <hr className="line mx-auto" />
                    <h5>For Basic Members:</h5>
                    <div className="text-start">
                    <ul>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can See 50 Profiles</li>
                      <li className="mt-2"><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> You Can't See All Details Like Contact - Number & Email Address</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> You Can't Chat</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> You Can't Video Call</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> All Facilities Are Not Available</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> Both The Costumer Can't Exchange The Number Also</li>
                    </ul>
                    </div>
                    <h6 className="mb-0 mt-4">
                      <a className="button_1" href="#">
                        Pay Now
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_2i text-center shadow_box p-4 bg-white">
                    <h5 className="fw-normal">STANDARD</h5>
                    <h6 className="col_brown mt-3 fst-italic">
                      ₹ <span className="fs-1">2100 </span>
                    </h6>
                    <hr className="line mx-auto" />
                    <h5>For Standard Members:</h5>
                    <div className="text-start">
                    <ul>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can See Free 100 +  Profiles</li>
                      <li className="mt-2"><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can See All Details Like Contact Number & Email Address</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> You Can't Chat</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> You Can't Video Call</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> All Facilities Are Not Available</li>
                      <li><i class="bi bi-x-circle" style={{color:'red', fontSize:'16px'}}></i> Both The Costumer Can't Exchange The Number Also</li>
                    </ul>
                    </div>
                    <h6 className="mb-0 mt-4">
                      <a className="button_1" href="#">
                        Pay Now
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_2i text-center shadow_box p-4 bg-white">
                    <h5 className="fw-normal">Advanced</h5>
                    <h6 className="col_brown mt-3 fst-italic">
                      ₹ <span className="fs-1">5100 </span> monthly
                    </h6>
                    <hr className="line mx-auto" />
                    <h5>For Advanced Members:</h5>
                    <div className="text-start">
                    <ul>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can See Free Unlimited Profiles</li>
                      <li className="mt-2"><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can See All Details Like Contact - Number & Email Address</li>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can Chat</li>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> You Can Video Call</li>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> All Facilities Are Available</li>
                      <li><i class="bi bi-check2-circle" style={{color:'green'}}></i> Both The Costumer Can Exchange The Number Also</li>
                    </ul>
                    </div>
                    <h6 className="mb-0 mt-4">
                      <a className="button_1" href="#">
                        Pay Now
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* wedding package-end */}

      {/*Event and  blog */}
      <Event />
      {/* blog-end*/}

    </>
  );
};

export default Homepage;
