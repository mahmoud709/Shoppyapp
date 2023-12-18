import ShowProducts from "../ShowProducts/ShowProducts.jsx";
import { useContext } from "react";
import { ProductsContext } from "../../context/getProducts.js";
import "./products.css";

export default function Products() {
  let { products } = useContext(ProductsContext);

  return (
    <div className="container my-5 pt-5">
      <div className="title text-center py-3">
        <h2 className="text-uppercase fw-bold ">
          shop with <span className="text-primary">us</span>
        </h2>
        <p>Handpicked Favorites just for you</p>
      </div>
      <div className="products mt-3">
        {products.map((el, index) => (
          <ShowProducts item={el} key={index} />
        ))}
      </div>
    </div>
  );
}
