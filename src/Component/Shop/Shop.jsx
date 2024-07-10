import React from "react";

const Shop = () => {
  return (
    <>
      <>
        <div className="center_main position-relative">
          <section id="center" className="pt-5 pb-5 center_o bg_light">
            <div className="container-xl">
              <div className="row center_o1 text-center">
                <div className="col-md-12">
                  <h1 className="font_50">Product</h1>
                  <span className="col_brown icon_dove fs-2">
                    <i className="fa fa-dove" />
                  </span>
                  <ul className="mt-3 mb-0">
                    <li className="d-inline-block">
                      
                      <a href="#">Home</a>
                    </li>
                    <li className="d-inline-block mx-2 text-muted">|</li>
                    <li className="d-inline-block col_brown"> Product List</li>
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
        <section id="shop" className="p_3">
          <div className="container-xl">
            <div className="row shop_1">
              <div className="col-md-9">
                <div className="shop_1l">
                  <div className="shop_1li row">
                    <div className="col-md-8">
                      <div className="shop_1lil pt-3">
                        <p className="mb-0">Showing 1–8 of 20 results</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_1lir">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Sort By Popularity</option>
                          <option value={1}>Sort By Latest</option>
                          <option value={2}>Sort By Rating</option>
                          <option value={3}>Sort By Trending</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row shop_h1 text-center mt-4">
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/24.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">LOREM PORTA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $38
                            </span>
                            $29
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/25.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">IPSUM NULLA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $32
                            </span>
                            $23
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/26.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">DOLOR AMET</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $42
                            </span>
                            $31
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row shop_h1 text-center mt-4">
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/27.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">LOREM PORTA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $38
                            </span>
                            $29
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/28.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">IPSUM NULLA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $32
                            </span>
                            $23
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/29.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">DOLOR AMET</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $42
                            </span>
                            $31
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row shop_h1 text-center mt-4">
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/30.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">LOREM PORTA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $38
                            </span>
                            $29
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/31.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">IPSUM NULLA</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $32
                            </span>
                            $23
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="shop_h1l">
                        <div className="shop_h1l1 position-relative">
                          <div className="shop_h1l1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <a href="detail.html">
                                  <img
                                    src="img/43.jpg"
                                    className="w-100"
                                    alt="img25"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="shop_h1l1i1 position-absolute top-0 pt-3">
                            <h6 className="mb-0 d-inline-block p-1 px-3  bg_brown text-white fst-italic">
                              Sale
                            </h6>
                          </div>
                        </div>
                        <div className="shop_h1l2 mt-3">
                          <h5 className="fw-normal">DOLOR AMET</h5>
                          <h3 className="col_brown">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $42
                            </span>
                            $31
                          </h3>
                          <h5 className="mb-0 fst-italic fw-normal">
                            <a className="col_brown" href="detail.html">
                              Add to cart
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pages  text-center mt-4 row">
                    <div className="col-md-12">
                      <ul className="mb-0">
                        <li>
                          <a href="detail.html">
                            <i className="fa fa-chevron-left" />
                          </a>
                        </li>
                        <li>
                          <a className="act" href="detail.html">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="detail.html">2</a>
                        </li>
                        <li>
                          <a href="detail.html">3</a>
                        </li>
                        <li>
                          <a href="detail.html">4</a>
                        </li>
                        <li>
                          <a href="detail.html">5</a>
                        </li>
                        <li>
                          <a href="detail.html">6</a>
                        </li>
                        <li>
                          <a href="detail.html">
                            <i className="fa fa-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="shop_1r">
                  <div className="shop_1r1">
                    <div className="input-group border_1">
                      <input
                        type="text"
                        className="form-control border-0 rounded-0 font_14"
                        placeholder="Search Products..."
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
                    <h4>Filter by Price</h4>
                    <hr className="line" />
                    <label htmlFor="customRange3" className="form-label">
                      Price: $0 — $780
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={5}
                      step="0.5"
                      id="customRange3"
                    />
                  </div>
                  <div className="shop_1r1 p-4 shadow_box p-4 mt-4">
                    <h4>Product Categories</h4>
                    <hr className="line" />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Night Party Event</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Photography</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Uncategorized</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Wedding Cake</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Wedding Dresses</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Wedding Music</a>
                    </h6>
                    <hr />
                    <h6 className="family_2 fw-normal font_14 mb-0">
                      <a href="detail.html">Wedding Planning</a>
                    </h6>
                  </div>
                  <div className="shop_1r1 p-4 shadow_box p-4 mt-4">
                    <h4>Product</h4>
                    <hr className="line" />
                    <div className="shop_1r1i row">
                      <div className="col-md-4 col-sm-4">
                        <div className="shop_1r1il">
                          <div className="grid clearfix">
                            <figure className="effect-jazz mb-0">
                              <a href="detail.html">
                                <img
                                  src="img/24.jpg"
                                  className="w-100"
                                  alt="img25"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <div className="shop_1r1ir">
                          <h5 className="mb-1 fs-5">
                            <a href="detail.html">Gift Basket</a>
                          </h5>
                          <span className="text-warning font_12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </span>
                          <h4 className="col_brown mb-0">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $38
                            </span>
                            $29
                          </h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="shop_1r1i row">
                      <div className="col-md-4 col-sm-4">
                        <div className="shop_1r1il">
                          <div className="grid clearfix">
                            <figure className="effect-jazz mb-0">
                              <a href="detail.html">
                                <img
                                  src="img/25.jpg"
                                  className="w-100"
                                  alt="img25"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <div className="shop_1r1ir">
                          <h5 className="mb-1 fs-5">
                            <a href="detail.html">Cake Candles</a>
                          </h5>
                          <span className="text-warning font_12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </span>
                          <h4 className="col_brown mb-0">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $31
                            </span>
                            $22
                          </h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="shop_1r1i row">
                      <div className="col-md-4 col-sm-4">
                        <div className="shop_1r1il">
                          <div className="grid clearfix">
                            <figure className="effect-jazz mb-0">
                              <a href="detail.html">
                                <img
                                  src="img/27.jpg"
                                  className="w-100"
                                  alt="img25"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-8">
                        <div className="shop_1r1ir">
                          <h5 className="mb-1 fs-5">
                            <a href="detail.html">Birthday Banner</a>
                          </h5>
                          <span className="text-warning font_12">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </span>
                          <h4 className="col_brown mb-0">
                            <span className="text-decoration-line-through fs-6 text-muted fw-normal">
                              $43
                            </span>
                            $33
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop_1r1 p-4 shadow_box p-4 mt-4">
                    <h4>Product Tags</h4>
                    <hr className="line" />
                    <ul className="mb-0 tags">
                      <li className="d-inline-block">
                        <a href="detail.html">Accessories</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Decor</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Hoodies</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Music</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Wedding</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Groom</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Bride</a>
                      </li>
                      <li className="d-inline-block">
                        <a href="detail.html">Rose</a>
                      </li>
                    </ul>
                  </div>
                  <div className="shop_1r1 p-4 shadow_box p-4 mt-4">
                    <h4>Newsletter</h4>
                    <hr className="line" />
                    <div className="input-group border_1">
                      <input
                        type="text"
                        className="form-control border-0 rounded-0 font_14"
                        placeholder="Email"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary bg-white border-0 rounded-0 p-2 px-3"
                          type="button"
                        >
                          <i className="fa fa-envelope col_brown" />
                        </button>
                      </span>
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

export default Shop;
