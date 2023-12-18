import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductsDetails() {
  let { _id } = useParams();
  const [productDetails, setproductDetails] = useState({});
  async function getSingleProduct(_id) {
    let { data } = await axios.get(`http://localhost:5000/products/${_id}`);
    setproductDetails(data.singleProduct);
  }
  useEffect(() => {
    getSingleProduct(_id);
  }, [_id]);
  return (
    <div className="product Details container">
      <h2>Product Details</h2>
      <h3>Name : {productDetails.productName}</h3>
      {productDetails.category ? (
        <h3>Category : {productDetails.category.name} </h3>
      ) : (
        "No category"
      )}
      <h3>Product Description : {productDetails.description}</h3>
      <h4>Price : {productDetails.productPrice} EGP</h4>
      <h3 className="h4">brand : {productDetails.brand}</h3>
    </div>
  );
}
