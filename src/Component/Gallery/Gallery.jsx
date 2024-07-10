import React from "react";
import image12 from '../../Images/img/image12.jpg'
import image15 from '../../Images/img/image15.jpg'
import image16 from '../../Images/img/image16.jpg'
import image44 from '../../Images/img/image44.jpg'
import image45 from '../../Images/img/image45.jpg'
import image46 from '../../Images/img/image46.jpg'
const Gallery = () => {
  return (
    <>
      <>
        <div className="center_main position-relative">
          <section id="center" className="pt-5 pb-5 center_o bg_light">
            <div className="container-xl">
              <div className="row center_o1 text-center">
                <div className="col-md-12">
                  <h1 className="font_50">Gallery</h1>
                  <span className="col_brown icon_dove fs-2">
                    <i className="fa fa-dove" />
                  </span>
                  <ul className="mt-3 mb-0">
                    <li className="d-inline-block">
                      <a href="#">Home</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block col_brown"> Gallery</li>
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
        <section id="moment" className="p_3">
          <div className="container-xl">
            <div className="row moment_1">
              <div className="col-md-4">
                <div className="moment_1l">
                  <div className="moment_1li position-relative">
                    <div className="moment_1li1">
                      <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                          <a href="#">
                            <img
                              src={image12}
                              className="w-100"
                              alt="img25"
                            />
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
                            <img
                              src={image44}
                              className="w-100"
                              alt="img25"
                            />
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
                            <img
                              src={image45}
                              className="w-100"
                              alt="img25"
                            />
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
                            <img
                              src={image15}
                              className="w-100"
                              alt="img25"
                            />
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
                            <img
                              src={image16}
                              className="w-100"
                              alt="img25"
                            />
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
                            <img
                              src={image46}
                              className="w-100"
                              alt="img25"
                            />
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
      </>
    </>
  );
};

export default Gallery;
