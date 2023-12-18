import React from "react";
import "./Home.css";
import banner1 from "../Images/banner1.AVIF";
import banner2 from "../Images/banner2.AVIF";
import banner3 from "../Images/banner3.AVIF";
import Products from "./../Products/Products";
import SmallBanner from "../smallBanner/SmallBanner";
import Services from "../Services/Services";

export default function Home() {
  return (
    <section>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src={banner1}
              className="img-fluid d-block w-100"
              alt="BannerHome1"
            />
            <div className="text-content text-center text-danger w-75 position-absolute mx-auto ">
              {/* <h5 className="h3">Up To 60% Off Now</h5>
              <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="img-fluid d-block w-100"
              alt="BannerHome2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              className="img-fluid d-block w-100"
              alt="BannerHome3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mx-auto my-5 servicelist row">
        <Services />
      </div>
      <Products />
      <SmallBanner text="Pre-Fall Collection,That Mid-Summer Craving For Fall Styles?" />
    </section>
  );
}
