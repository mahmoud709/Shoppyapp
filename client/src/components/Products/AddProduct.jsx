import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    productImg: null,
    productPrice: "",
    qty: "",
    category: "",
    brand: "",
    available: true,
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function takeData(event) {
    const { name, value, files } = event.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  }

  const addProduct = async () => {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post("http://localhost:5000/dashboard/addProduct", formData);

      // Reset productData to clear the input fields
      setProductData({
        productName: "",
        description: "",
        productImg: null,
        productPrice: "",
        qty: "",
        category: "",
        brand: "",
        available: true,
      });

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  async function getCategories() {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/dashboard/categories"
      );
      setCategories(data.allCategories);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Add New Product</h2>
        <div className="form-group">
          <label htmlFor="productName" className="py-2 fw-bold">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            name="productName"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={takeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="py-2 fw-bold">
            Description
          </label>
          <textarea
            name="description"
            className="form-control"
            aria-label="With textarea"
            placeholder="Enter description of product"
            onChange={takeData}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productImg" className="py-2 fw-bold">
            Product Image
          </label>
          <input
            name="productImg"
            className="form-control"
            type="file"
            accept="image/*"
            onChange={takeData}
          />
        </div>
        <div className="form-group row g-3">
          <div className="col-md-6">
            <label htmlFor="productPrice" className="py-2 fw-bold">
              Price
            </label>
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              className="form-control"
              placeholder="Enter Price"
              onChange={takeData}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="qty" className="py-2 fw-bold">
              Quantity
            </label>
            <input
              type="number"
              id="qty"
              name="qty"
              className="form-control"
              placeholder="Enter Quantity"
              onChange={takeData}
              min={0}
            />
          </div>
        </div>
        <div className="form-group row g-3 my-2">
          <div className="col-md-6">
            <label htmlFor="category" className="fw-bold">
              Category
            </label>
            <select
              id="category"
              className="form-select my-3"
              aria-label="Default select example"
              onChange={takeData}
              name="category"
            >
              <option value="Choose Category">Choose Category</option>
              {categories.map((el) => (
                <option value={el._id} key={el._id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="brand" className="fw-bold">
              Choose Brand
            </label>
            <input
              id="brand"
              placeholder="Brand"
              className="form-control my-3"
              onChange={takeData}
              name="brand"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="available">choose product available</label>
            <select
              id="available"
              placeholder="choose available or not"
              className="form-control my-3"
              onChange={takeData}
              name="available"
            >
                <option>choose product available or not</option>
                <option>true</option>
                <option>false</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success mt-3"
          >
            Add product!
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
