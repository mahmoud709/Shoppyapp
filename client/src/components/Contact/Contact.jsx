import React, { useState } from "react";
import axios from "axios";
import Banner from "../BannerComponent/Banner";
import TextCom from "../textComponent/TextCom";
import { API_URL } from "../../utils/api";
export default function Contact() {
  const [isLoading, setisLoading] = useState(false);
  const [complaints, setcomplaints] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    textcontent: "",
  });
  function takeData(e) {
    let Data = { ...complaints };
    Data[e.target.name] = e.target.value;
    setcomplaints(Data);
  }
  async function postData() {
    const data =await axios.post(`${API_URL}/contact`, complaints);
    if (data.status === 201){
      setisLoading(false)
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    setisLoading(true);
    postData();
  }
  return (
    <div className="contactPage ">
      <Banner text="Contact Us" text2="Home" />
      <div className="container">
        <div className="title text-center my-5">
          <TextCom
            texthead="GET IN TOUCH"
            textBody="Contact With Our Support During Emergency!"
          />
        </div>
        <div className="contactIcons row pb-4">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="text-center me-3 ">
              <span className="fas fa-map-marker-alt text-primary fs-2"></span>
            </div>
            <div className="me-2">
              <h6 className="fw-bolder">Office Address:</h6>
              <p>
                Lorem ipsum, 343 ShoppyKart,
                <br /> #4148 Honey street, NY - 62617.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="text-center me-4">
              <i className="fa-solid fa-phone text-primary fs-2"></i>
            </div>
            <div className="cont-right">
              <h6 className="fw-bolder">Call for help :</h6>
              <p>
                <span>+1(21) 234 557 4567</span>
              </p>
              <p>
                <span>+1(21) 234 557 4568</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="text-center me-4">
              <i className="far fa-envelope text-primary fs-2"></i>
            </div>
            <div className="cont-right">
              <h6 className="fw-bolder">Mail Us:</h6>
              <p>
                <span>Support@mail.com</span>
              </p>
            </div>
          </div>
        </div>
        <form className="form my-3" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                onChange={takeData}
              />
            </div>
            <div className="col-md-6 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={takeData}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={takeData}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                name="phone"
                min={11}
                max={11}
                onChange={takeData}
              />
            </div>
          </div>
          <div className="form-floating my-2">
            <textarea
              style={{ height: 100 }}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="textcontent"
              onChange={takeData}
            ></textarea>
            <label htmlFor="floatingTextarea">Type your Message here</label>
          </div>
          <button className="btn btn-primary fw-bold">
            {isLoading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
