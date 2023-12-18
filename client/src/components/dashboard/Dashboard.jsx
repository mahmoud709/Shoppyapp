import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="dashboard row">
      <div className="col-md-3">
        <aside className="vh-100 bg-dark ">
          <div className="dash-header">
            <h2 className="h3 py-3 text-white text-center">Dashboard</h2>
          </div>
          <div className="actions ms-4">
            <h3 className="h5">
              <Link className="text-decoration-none text-white" to="products">
                products
              </Link>
            </h3>
            <h3 className="h5">
              <Link
                className="text-decoration-none text-white"
                to="addcategory"
              >
                Add Category
              </Link>
            </h3>
            <h3 className="h5">
              <Link className="text-decoration-none text-white" to="addProduct">
                Add Product
              </Link>
            </h3>
            <h3 className="h5">
              <Link to="complaints" className="text-decoration-none text-white">
                complaints
              </Link>
            </h3>
          </div>
        </aside>
      </div>
      <div className="col-md-9">
        <Outlet />
      </div>
    </div>
  );
}
