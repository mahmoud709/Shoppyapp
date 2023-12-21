import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/Shoppingcart";
import axios from "axios";
import { API_URL } from './../../utils/api';

export default function Cart() {
  const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const promises = cartItems.map(async (cartItem) => {
          const response = await axios.get(`${API_URL}/products/${cartItem.id}`);
          return { ...response.data, quantity: cartItem.quantity };
        });
        const details = await Promise.all(promises);
        setProductDetails(details);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cartItems]);

  return (
    <section className="vh-100 h-custom container">
      <div className="h-100 py-5 row">
        <div className="h-100 col-md-9">
          <div className="col">
            <div className="table-responsive">
              {cartItems.length > 0 ? <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="text-center">
                      Product Name
                    </th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-center">
                      Price
                    </th>
                    <th scope="col" className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails.map((product) => (
                    <tr key={product.singleProduct._id}>
                      <td className="align-middle">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="flex-column">
                            <p className="mb-0">{product.singleProduct.productName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="btn btn-primary" onClick={() => increaseCartQuantity(product.singleProduct._id)}>+</button>
                          <b className="mx-2">{product.quantity}</b>
                          <button className="btn btn-primary" onClick={() => decreaseCartQuantity(product.singleProduct._id)}>-</button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0 fw-bold">{(product.singleProduct.productPrice * product.quantity).toFixed(2)} EGP</p>
                      </td>
                      <td className="align-middle">
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{ cursor: "pointer", fontSize: "20px" }}
                          onClick={() => removeItemFromCart(product.singleProduct._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> : <h3>You shopping cart is empty</h3>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
