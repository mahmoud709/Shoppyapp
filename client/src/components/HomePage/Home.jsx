import React from "react";
import "./Home.css";
import Products from "./../Products/Products";
import SmallBanner from "../smallBanner/SmallBanner";
import Services from "../Services/Services";

export default function Home() {
  return (
    <section>
      <div className="homePage vh-100">
      <div className="h-100 container d-flex justify-content-center  flex-column">
        <h1 className="text-white fw-bold">Explore our new featured products !</h1>
        <button className="btn btn-primary fw-bold w-25">Explore more</button>
      </div>
      </div>
      <div className="container mx-auto my-5 servicelist row">
        <Services />
      </div>
      <Products />
      <SmallBanner text="Pre-Fall Collection,That Mid-Summer Craving For Fall Styles?" />
    </section>
  );
}
