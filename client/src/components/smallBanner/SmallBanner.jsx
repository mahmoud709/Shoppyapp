import React from "react";
import "./smallbanner.css";
export default function SmallBanner(props) {
  return (
    <div className="sm-banner py-5 w-100 ">
      <div className="bannerTitle text-center">
        <h2 className="text-white fw-bolder w-auto p-1 lh-lg">{props.text}</h2>
      </div>
      <div className="video-play-icon text-center my-3 mx-auto bg-white position-relative">
        <span className="fa fa-play text-primary d-inline-block fs-3 position-absolute"></span>
      </div>
    </div>
  );
}
