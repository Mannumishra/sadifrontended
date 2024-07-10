import React, { useState } from 'react'
import image18 from "../../Images/img/image18.png";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  const getinputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const postdata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", data)
      if(res.status===200){
        sessionStorage.setItem("userid" , res.data.data._id)
        sessionStorage.setItem("gender" , res.data.data.gender)
        sessionStorage.setItem("name" , res.data.data.name)
        sessionStorage.setItem("login" , true)
        toast.success("Login successfully......!!!")
        window.location.href = '/'
      }
    } catch (error) {
      console.log(error)
    }
  }
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
              <div className="attend_1m shadow_box">
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <h1 className="font_30 mb-5 text-center">Login</h1>
                <form action="" onSubmit={postdata}>
                  <input
                    className="form-control mt-3"
                    placeholder="Email"
                    type="email"
                    name='email'
                    onChange={getinputData}
                  />
                  <input
                    className="form-control mt-3"
                    placeholder="Password"
                    type="password"
                    name='password'
                    onChange={getinputData}
                  />
                  <h6 className="mb-0 mt-4">
                    <button className="button_1">
                      Login
                    </button>
                  </h6>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <div className="attend_1l">
                <img src={image18} className="w-100" alt="abc" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Login