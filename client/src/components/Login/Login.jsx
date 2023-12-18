import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function takeData(event) {
    let signinData = { ...loginData };
    signinData[event.target.name] = event.target.value;
    setLoginData(signinData);
  }

  async function postData() {
    try {
      const { data } = await axios.post("http://localhost:5000/signin", loginData);

      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        navigate("/");
        toast.success("Login successful");
      }
    } catch (error) {
      toast.error('Error while login', {
        position: "top-left",
        autoClose: 5000,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postData();
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong rounded-1">
              <form className="card-body p-5 text-center" onSubmit={handleSubmit}>
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input
                    name="email"
                    type="email"
                    id="logEmail"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    onChange={takeData}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    name="password"
                    type="password"
                    id="logPass"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    onChange={takeData}
                  />

                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label
                    className="form-check-label ms-1"
                    htmlFor="form1Example3"
                  >
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-block fw-bold"
                  type="submit"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/signup" className="link-danger">
                    Register
                  </Link>
                </p>
                <hr className="my-4" />
                <div className="text-center">
                  <p>or sign in with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
