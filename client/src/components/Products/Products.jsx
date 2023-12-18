import React, { useContext, useEffect, useState } from "react";
import ShowProducts from "../ShowProducts/ShowProducts.jsx";
import { ProductsContext } from "../../context/getProducts.js";
import axios from "axios";
import { API_URL } from "../../utils/api.jsx";

export default function Products() {
  const { products } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter(
      (product) =>
        product.category.name === selectedCategory ||
        selectedCategory === ""
    )
    .filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/getCatagories`);
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container my-5 pt-5">
      <div className="title text-center py-3">
        <h2 className="text-uppercase fw-bold ">
          shop with <span className="text-primary">us</span>
        </h2>
        <p>Handpicked Favorites just for you</p>
      </div>
      <div className="d-flex mb-3 justify-content-between">
        <select
          className="form-select me-2 w-25"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All categories</option>
          {categories &&
            categories.map((category) => (
              <option key={category.code} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="products row mt-3">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <ShowProducts key={index} item={product} />
          ))}
      </div>
    </div>
  );
}
