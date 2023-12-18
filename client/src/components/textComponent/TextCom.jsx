import React from "react";

export default function TextCom(props) {
  return (
    <div className="textComonents text-center">
      <b className="text-primary text-uppercase">{props.texthead}</b>
      <h2 className="text-dark fw-bold">{props.textBody}</h2>
    </div>
  );
}
