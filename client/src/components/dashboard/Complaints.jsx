import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);

  async function getComplaints() {
    try {
      const { data } = await axios.get("http://localhost:5000/dashboard/complaints");
      setComplaints(data.allComplaints);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComplaints();
  }, []);

  return (
    <div className="ComplaintsDetails">
      <h2>Complaints Details</h2>
      {complaints.map((el, index) => (
        <div key={index} className="complaintsDetails my-3">
          <div className="complaintsContents">
            <div className="card p-3 position-relative">
              <h3 className="h5">
                Name is {el.firstName} {el.lastName}
              </h3>
              <p>{`Email : ${el.email}`}</p>
              <p>Phone {el.phone}</p>
              <p>Message : {el.textcontent}</p>
              <button className="btn btn-danger m-2 position-absolute bottom-0 end-0">
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
