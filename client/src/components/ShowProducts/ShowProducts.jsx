import { Link } from "react-router-dom";
import "./show.css";
import { useShoppingCart } from "../../context/Shoppingcart.js";

export default function ShowProducts({ item }) {
  const { getItemsQuantity ,increaseCartQuantity } = useShoppingCart();
  const quantity=getItemsQuantity(item._id);
  return (
    <>
      <div className="card rounded-3 position-relative p-2">
        <div className="card-body">
          <div className="content">
            <div className="Productimage">
              <img
                src={item.productImg.url}
                alt={item.productName}
              />
            </div>
            <Link
              to={`/products/${item._id}`}
              className="card-title text-decoration-none"
            >
              <h2 className="h4 py-3">{item.productName}</h2>
            </Link>
            <p className="card-text">{item.description}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <b>{item.productPrice} EGB</b>
            <button className="btn btn-outline-primary" onClick={()=>increaseCartQuantity(item._id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
