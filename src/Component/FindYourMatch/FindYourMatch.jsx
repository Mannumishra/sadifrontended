import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image23 from "../../Images/img/image23.png";

const FindYourMatch = () => {
  const [bride, setBride] = useState([])

  const getBride = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/user")
      console.log(res)
      setBride(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBride()
  }, [])
  return (
    <>
      <section id="bride" className="p_3">
        <div className="container-xl">
          <div className="row story_1 text-center mb-4">
            <div className="col-md-12">
              <span className="col_brown icon_dove fs-2">
                <i className="fa fa-dove" />
              </span>
              <h1 className="font_50">Find &amp; Your Match</h1>
            </div>
          </div>
          <div className="row bride_1">
            {
              bride.map((item, index) =>
                <div className="col-md-4" key={index}>
                <Link to={`/partner_detail/${item._id}`}>
                
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
                
                </Link>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default FindYourMatch;
