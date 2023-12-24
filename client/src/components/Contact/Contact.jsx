import React from "react";
import Banner from "../BannerComponent/Banner";
import TextCom from "../textComponent/TextCom";

export default function Contact() {
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

        <form className="form my-3">
          <div className="row g-3">
            <div className="col-md-6 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
              />
            </div>
            <div className="col-md-6 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
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
            ></textarea>
            <label htmlFor="floatingTextarea">Type your Message here</label>
          </div>
          <button className="btn btn-primary fw-bold">
            send message
          </button>
        </form>
      </div>
    </div>
  );
}
