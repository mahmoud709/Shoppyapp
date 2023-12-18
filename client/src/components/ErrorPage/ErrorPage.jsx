import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="centerHV text-center py-5 my-5">
      <h1 className="text-dark fw-bolder fs-1">Oh no</h1>
      <h2 className="text-primary">Oops....</h2>
      <p className="text-muted">
        We Can't seem to the page your looking for. It turned to a 404 Error
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
}
