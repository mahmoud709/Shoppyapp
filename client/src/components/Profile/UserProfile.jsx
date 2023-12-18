import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const userToken=localStorage.getItem('token');
  async function fetchProfileData(token) {
    try {
      const { data } = await axios.get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (data.success === 200) {
        setUserData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchProfileData();
    console.log(userData);

  }, [])
  return (
    <div className="container">
      <h1 className="h3 fw-bold my-4">My Profile</h1>
      <div className="border p-3 my-5">
        <h2>Personal Information</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>
                <span className="text-muted">Name</span> : {userData.firstName} <br />
              </h3>
            </div>
            <div className="col-md-6">
              <h4>
              <span className="text-muted">Phone</span> : {userData.phone} <br />
              </h4>
            </div>
            <div className="col-md-6">
              <h4><span>Email : {userData.email}</span></h4>
            </div>
          </div>
      </div>
    </div>
  );
}
