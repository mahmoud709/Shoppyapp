import React from "react";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <div className="bannerComponent align-items-center">
      <div
        className="textcontent container d-flex justify-content-center flex-column"
        style={{ height: 300 }}>
        <h1 className="text-white fw-bold">{props.text}</h1>
        <h5 className="text-white">
          <Link className="text-decoration-none text-primay" to="/">
            {props.text2}
          </Link>
          <span className="fas fa-angle-double-right mx-2"></span>
          {props.text}
        </h5>
      </div>
    </div>
  );
}
