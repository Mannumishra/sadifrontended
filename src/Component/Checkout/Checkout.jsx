import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="center_main position-relative">
        <section id="center" className="pt-5 pb-5 center_o bg_light">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="font_50">Checkout</h1>
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <ul className="mt-3 mb-0">
                  <li className="d-inline-block">
                    
                    <a href="#">Home</a>
                  </li>
                  <li className="d-inline-block mx-2 text-muted">|</li>
                  <li className="d-inline-block col_brown"> Checkout</li>
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
      <section id="checkout" className="p_3">
        <div className="container-xl">
          <div className="checkout_1 row">
            <div className="col-md-8">
              <div className="checkout_1l shadow_box bg-white p-4">
                <div className="checkout_1l1">
                  <h4 className="mb-4">Billing Details</h4>
                </div>
                <div className="checkout_1l2">
                  <div className="checkout_1l2i row">
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout_1l2i row mt-4">
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Company Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Country"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout_1l2i row mt-4">
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="City"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="State / Province"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout_1l2i row mt-4">
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Street"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Postcode"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout_1l2i row mt-4">
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Phone"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout_1l2il">
                        <input
                          className="form-control font_14 border-0 bg_light"
                          placeholder="Email"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout_1l1 mt-4">
                  <h4 className="mb-4">Additional Information</h4>
                </div>
                <div className="checkout_1l2">
                  <div className="checkout_1l2i row">
                    <div className="col-md-12">
                      <div className="checkout_1l2il">
                        <textarea
                          placeholder="Other Notes"
                          className="form-control font_14 form_text border-0 bg_light"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout_1l1 mt-4">
                  <h4 className="mb-4">Payment Method</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Direct bank transfer
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Check payments
                    </label>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <h6 className="mb-0 mt-4">
                    <a className="button_1" href="#">
                      
                      Place Order
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkout_1r">
                <ul className="drop_cart">
                  <li>
                    <div className="drop_1i row">
                      <div className="col-md-6 col-6">
                        <div className="drop_1il">
                          <h5 className="fs-6">2 ITEMS</h5>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="drop_1il text-end">
                          <h5 className="fs-6">
                            <a href="cart.html">VIEW CART</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="drop_1i1 row">
                      <div className="col-md-6 col-6">
                        <div className="drop_1i1l">
                          <h6 className="fs-6">
                            <a href="#">Nulla Quis</a> <br />
                            <span className="d-inline-block mt-1 font_15">
                              1x - $89.00
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="drop_1i1r">
                          <a href="#">
                            <img src="img/52.jpg" className="w-100" alt="abc" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-2 col-2">
                        <div className="drop_1i1l text-end">
                          <h6>
                            
                            <span>
                              <i className="fa fa-trash" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="drop_1i1 row">
                      <div className="col-md-6 col-6">
                        <div className="drop_1i1l">
                          <h6 className="fs-6">
                            <a href="#">Eget Nulla</a> <br />
                            <span className="d-inline-block mt-1 font_14">
                              1x - $49.00
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="drop_1i1r">
                          <a href="#">
                            <img src="img/53.jpg" className="w-100" alt="abc" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-2 col-2">
                        <div className="drop_1i1l text-end">
                          <h6>
                            
                            <span>
                              <i className="fa fa-trash" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="drop_1i2 row">
                      <div className="col-md-6 col-6">
                        <div className="drop_1il">
                          <h5 className="fs-6">TOTAL</h5>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="drop_1il text-end">
                          <h5 className="fs-5">$142.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="drop_1i3 text-center row">
                      <div className="col-md-12 col-12">
                        <ul className="mb-0">
                          <li className="d-inline-block mx-1">
                            <a
                              className="button_2 px-3 pt-2 pb-2 font_14"
                              href="#"
                            >
                              View Order
                            </a>
                          </li>
                          <li className="d-inline-block mx-1">
                            <a
                              className="button_1 px-3 pb-2 pt-2 font_14"
                              href="#"
                            >
                              Checkout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
