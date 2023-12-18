import React from "react";

export default function UserProfile() {
  return (
    <div className="container">
      <h1 className="h3 fw-bold my-4">My Profile</h1>
      <div className="border p-3 my-5">
        <h2>Personal Information</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>
                <span className="text-muted">Name</span> <br />
              </h3>
            </div>
            <div className="col-md-6">
              <h4>
                <span className="text-muted">Phone</span> <br />
              </h4>
            </div>
          </div>
      </div>
    </div>
  );
}
