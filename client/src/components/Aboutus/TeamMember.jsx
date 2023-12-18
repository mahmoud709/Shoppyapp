import React from "react";
import "./TeamMember.css";
export default function TeamMember(props) {
  return (
    <div className="member col-md-4 my-2">
      <div className="image">
        <img className="w-100 rounded" src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="overlay text-black">
        <h4 className="fw-bold">{props.name}</h4>
        <p>{props.jop}</p>
      </div>
    </div>
  );
}
