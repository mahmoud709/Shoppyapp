import { Link } from "react-router-dom";
import "./show.css";
import { useShoppingCart } from "../../context/Shoppingcart.js";
import { ToastContainer, toast } from 'react-toastify';

export default function ShowProducts({ item }) {
  const { getItemsQuantity ,increaseCartQuantity } = useShoppingCart();
  const quantity=getItemsQuantity(item._id);

  function showToast(){
    toast.success('product added to cart!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    })
  }
  const handleClick = () => {
    increaseCartQuantity(item._id);
    showToast();
  };

  return (
    <div className="col-md-3 my-2">
    <ToastContainer/>
      <div className="card rounded-3 p-2 h-100">
        <div className="card-body p-0 h-75">
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
            <button className="btn btn-outline-primary" onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
