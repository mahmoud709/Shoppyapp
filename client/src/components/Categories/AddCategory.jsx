import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from './../../utils/api';

export default function AddCategory() {
  const [categoryData, setcategoryData] = useState({
    name: "",
    code: "",
  });
  const navigate = useNavigate();
  function takeData(event) {
    let categorydata = { ...categoryData };
    categorydata[event.target.name] = event.target.value;
    setcategoryData(categorydata);
  }
  async function postData() {
    await axios.post(
      `${API_URL}/addcategory`,
      categoryData
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    postData();
    navigate("/dashboard");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mt-4">Add New Category</h2>
        <div className="form-group">
          <label htmlFor="category" className="py-2 fw-bold">
            Category Name
          </label>
          <input
            id="category"
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Category Name"
            onChange={takeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="py-2 fw-bold">
            Category Code
          </label>
          <input
            id="categoryCode"
            type="text"
            name="code"
            className="form-control"
            placeholder="Enter Category Code"
            onChange={takeData}
          />
        </div>
        <button className="btn btn-success mt-3">Add Category</button>
      </form>
    </div>
  );
}
