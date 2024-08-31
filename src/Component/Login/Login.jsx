import React, { useEffect, useState } from 'react';
import image18 from "../../Images/img/image18.png";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const getinputData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.sitarammarriagebureau.com/api/user/login", data);
      if (res.status === 200) {
        sessionStorage.setItem("userid", res.data.data._id);
        sessionStorage.setItem("gender", res.data.data.gender);
        sessionStorage.setItem("name", res.data.data.name);
        sessionStorage.setItem("login", true);
        toast.success("Login successfully......!!!");
        window.location.href = "/"
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <>
      <section id="attend" className="p_3">
        <div className="container-xl">
          <div className="row attend_1 text-center">
            <div className="col-md-3">
              <div className="attend_1l">
                <img src={image18} className="w-100" alt="abc" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="attend_1m shadow_box formouter">
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <h1 className="font_30 mb-5 text-center">Login</h1>
                <form onSubmit={postdata} className="loginform">
                  <input
                    className="form-control mt-3"
                    placeholder="Email"
                    type="email"
                    name='email'
                    onChange={getinputData}
                    value={data.email} // Added value attribute
                  />
                  <input
                    className="form-control mt-3"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'} // Toggle type based on showPassword state
                    name='password'
                    onChange={getinputData}
                    value={data.password} // Added value attribute
                  />
                  <div className="mt-2" style={{ float: "left" }}>
                    <input
                      type="checkbox"
                      id="showPassword"
                      className=""
                      checked={showPassword} // Added checked attribute
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                  </div>
                  <h6 className="mb-0 mt-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className="button_1" type="submit">
                      Login
                    </button>
                  </h6>
                </form>
                <p className="mt-4 text-center">
                  Don't have an account? <Link to="/signup"><u>Sign Up</u></Link>
                </p>
                <p className="mt-2 text-center">
                  <Link to="/forgot-password"><u>Forgot Password?</u></Link>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="attend_1l">
                <img src={image18} className="w-100" alt="abc" />
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
};

export default Login;
