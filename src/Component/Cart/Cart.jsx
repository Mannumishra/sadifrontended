import React from "react";

const Cart = () => {
  return (
    <>
      <div className="center_main position-relative">
        <section id="center" className="pt-5 pb-5 center_o bg_light">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="font_50">Shopping Cart</h1>
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <ul className="mt-3 mb-0">
                  <li className="d-inline-block">
                    <a href="#">Home</a>
                  </li>
                  <li className="d-inline-block mx-2 text-muted">|</li>
                  <li className="d-inline-block col_brown"> Shopping Cart</li>
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
      <section id="cart" className="p_3">
        <div className="container-xl">
          <div className="cart_1 row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table align-middle">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Product</td>
                      <td className="fw-bold">Quantity</td>
                      <td className="fw-bold">Price</td>
                      <td className="fw-bold">Total</td>
                      <td className="fw-bold" />
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="img/52.jpg"
                          alt="abc"
                          className="float-start me-3"
                        />
                        <h5 className="fs-4 mt-3 ">
                          <a href="#">Stracciatella</a>
                        </h5>
                        <p className="mb-0 font_14">
                          Adipiscing elit Integer nec odio Praesent libero
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          defaultValue={1}
                          className="form-control rounded-0"
                          placeholder="Qty"
                          style={{ width: 80, height: 54 }}
                        />
                      </td>
                      <td>
                        <h6 className="mb-0 family_2 fw-normal">$15.00</h6>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-bold family_2">$15.00</h6>
                      </td>
                      <td>
                        <span className="btn_cross">
                          <a
                            className="d-inline-block bg_light rounded-circle text-center"
                            href="#"
                          >
                            <i className="fa fa-remove" />
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="img/53.jpg"
                          alt="abc"
                          className="float-start me-3"
                        />
                        <h5 className="fs-4 mt-3">
                          <a href="#">Chevrefrit au miel</a>
                        </h5>
                        <p className="mb-0 font_14">
                          Sed cursus ante dapibus diam Sed nisi Nulla quis
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          defaultValue={1}
                          className="form-control rounded-0"
                          placeholder="Qty"
                          style={{ width: 80, height: 54 }}
                        />
                      </td>
                      <td>
                        <h6 className="mb-0 fw-normal family_2">$12.00</h6>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-bold family_2">$12.00</h6>
                      </td>
                      <td>
                        <span className="btn_cross">
                          <a
                            className="d-inline-block bg_light rounded-circle text-center"
                            href="#"
                          >
                            <i className="fa fa-remove" />
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="img/54.jpg"
                          alt="abc"
                          className="float-start me-3"
                        />
                        <h5 className="fs-4  mt-3">
                          <a href="#">Carpaccio de daurade</a>
                        </h5>
                        <p className="mb-0 font_14">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                      </td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          defaultValue={1}
                          className="form-control rounded-0"
                          placeholder="Qty"
                          style={{ width: 80, height: 54 }}
                        />
                      </td>
                      <td>
                        <h6 className="mb-0 family_2 fw-normal">$8.99</h6>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-bold family_2">$8.99</h6>
                      </td>
                      <td>
                        <span className="btn_cross">
                          <a
                            className="d-inline-block bg_light rounded-circle text-center"
                            href="#"
                          >
                            <i className="fa fa-remove" />
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="cart_2 row mt-3">
            <div className="col-md-6">
              <div className="cart_2l" />
            </div>
            <div className="col-md-6">
              <div className="cart_2r">
                <h6 className="fw-bold">
                  
                  <span className="float-end  text-muted">$35.99</span>
                </h6>
                <h6 className="fw-bold mt-3">
                  Estimated 
                  <span className="float-end   text-muted">$6</span>
                </h6>
                <h4 className="mt-3">
                  Total: <span className="float-end">$41.99</span>
                </h4>
                <hr />
                <div className="cart_2ri row">
                  <div className="col-md-6">
                    <div className="cart_2ril">
                      <h6 className="mb-0 fw-bold mt-3">
                        <a href="#">Continue shopping</a>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cart_2rir text-end">
                      <h6 className="mb-0">
                        <a className="button_1" href="checkout.html">
                          Checkout
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <hr className="mb-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
