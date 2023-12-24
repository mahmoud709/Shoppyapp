import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { API_URL } from "../../utils/api";

export default function Register() {
const navigate=useNavigate();
const [registerData, setregisterData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword:"",
});
  function takeData(event){
    let signupData = { ...registerData };
    signupData[event.target.name] = event.target.value;
    setregisterData(signupData);
  }
async  function postData(){
  try{
    let data  = await axios.post(`${API_URL}/signup`, registerData);
    console.log('data is rs'+data);
    // navigate('/signin')

  }
  catch(err){
    console.log('err' + err);
  }
  }
  function handleSubmit(e){
    e.preventDefault();
    postData();
  }
  return (
    <section className="vh-100">
      <div className="container py-2 px-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form className="card-body text-center" onSubmit={handleSubmit}>
                <h3 className="mb-5">Sign Up</h3>
                <div className="form-outline mb-4">
                  <input
                    name="firstName"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Phone"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="form-control form-control-lg"
                    onChange={takeData}
                  />
                </div>
                <button className="btn btn-primary btn-block">
                  Create Account
                </button>
                <p className="mt-2">
                  Have an account?
                  <Link className="text-decoration-none" to="/signin">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
