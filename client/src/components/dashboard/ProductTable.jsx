import React, { useContext } from "react";
import { ProductsContext } from "../../context/getProducts";
import axios from "axios";
import Swal from "sweetalert2";

function confirmDelete(_id, deleteProduct) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(_id);
      Swal.fire("Deleted!", "Your Product has been deleted", "success");
    }
  });
}

export default function ProductTable() {
  const { products, deleteProduct } = useContext(ProductsContext);

  async function handleDelete(_id) {
    try {
      await axios.delete(`http://localhost:5000/dashboard/products/${_id}`);
      deleteProduct(_id);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="mt-5">
      <table className="table container my-3">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Product Name
            </th>
            <th scope="col" className="text-center">
              Category
            </th>
            <th scope="col" className="text-center">
              Product Price
            </th>
            <th scope="col" className="text-center">
              Description
            </th>
            <th scope="col" className="text-center">
              Product Quantity
            </th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((el, index) => {
            return (
              <tr key={index}>

                <td className="text-center align-middle">{el.productName}</td>
                <td className="text-center align-middle">
                  {el.category ? el.category.name : "No Category"}
                </td>
                <td className="text-center align-middle">{el.productPrice}</td>
                <td className="text-center align-middle">{el.description}</td>
                <td className="text-center align-middle">{el.qty}</td>
                <td className="text-center">
                  <button className="btn btn-secondary m-1" type="submit">
                    update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-1"
                    onClick={() => confirmDelete(el._id, handleDelete)}
                  >
                    Delete
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Delete Product
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body text-start">
                          Are you sure to delete product
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteProduct(el._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
