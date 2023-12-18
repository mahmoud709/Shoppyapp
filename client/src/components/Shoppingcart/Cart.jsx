import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/Shoppingcart";
import axios from "axios";

export default function Cart() {
  const { cartItems, getItemsQuantity, increaseCartQuantity, removeItemFromCart } = useShoppingCart();
  const [productDetails, setProductDetails] = useState([]);
  console.log(cartItems);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const promises = cartItems.map(async (cartItem) => {
          const response = await axios.get(`http://localhost:5000/products/${cartItem.id}`);
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
    <section className="h-100 h-custom container">
      <div className="h-100 py-5 row">
        <div className="h-100 col-md-9">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle">
                      Product Name
                    </th>
                    <th scope="col" className="align-middle">
                      Quantity
                    </th>
                    <th scope="col" className="align-middle">
                      Price
                    </th>
                    <th scope="col" className="align-middle">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails.map((product) => (
                    <tr key={product.singleProduct._id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="flex-column ms-4">
                            <p className="mb-2">{product.singleProduct.productName}</p>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle">
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <input
                            min="1"
                            name="quantity"
                            type="number"
                            value={product.quantity}
                            className="form-control form-control-sm"
                          />
                        </div>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0 fw-bold">{product.singleProduct.productPrice} EGP</p>
                      </td>
                      <td className="align-middle">
                        <i
                          className="fa-solid fa-trash text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeItemFromCart(cartItems.id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
