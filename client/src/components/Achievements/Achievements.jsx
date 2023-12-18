import React from "react";

export default function Achievements(props) {
  return (
    <div className="col-md-3 border py-4 text-center position-relative">
      <i className={props.className}></i>
      <h3 className="fw-bold primary">{props.number}</h3>
      <p className="text-muted text-capitalize">{props.text}</p>
    </div>
  );
}
