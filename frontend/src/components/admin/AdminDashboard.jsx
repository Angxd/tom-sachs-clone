import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin.css";
import "./feather.css";
// import "./css/dashboard.css";
// import "./css/simplebar.css";
// import "./css/daterangepicker.css";
// import "./css/apexcharts.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5100/api/products");

      setProducts(data);
    } catch (error) {
      console.error("Error in getProducts", error);

      alert("Something went wrong");
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5100/api/auth/all");

      setUsers(data);
    } catch (error) {
      console.error("Error in getUsers", error);

      alert("Something went wrong");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5100/api/products/${id}`);

      alert("Product deleted");

      const tempProducts = products.filter((product) => product.id !== id);
      setProducts(tempProducts);
    } catch (error) {
      console.error("Error in deleteProduct", error);

      alert("Something went wrong");
    }
  };

  const deleteUser = async (_id) => {
    try {
      await axios.delete(`http://localhost:5100/api/auth/${_id}`);

      alert("Product deleted");

      const tempUser = users.filter((user) => user._id !== _id);
      setUsers(tempUser);
    } catch (error) {
      console.error("Error in deleteProduct", error);

      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  return (
    <div className="section-admin">
      <div className="managing">
        <div className="page-width">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-0">$1250</span>
                      <p className="small text-muted mb-1">Monthly Sales</p>
                      <span className="badge badge-pill badge-success">
                        +15.5%
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-24 fe-shopping-bag text-muted mb-0"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-0">1869</span>
                      <p className="small text-muted mb-1">Orders</p>
                      <span className="badge badge-pill badge-success">
                        +16.5%
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-24 fe-clipboard text-muted mb-0"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-0">186</span>
                      <p className="small text-muted mb-0">Customers</p>
                      <span className="badge badge-pill badge-warning">
                        +1.5%
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-24 fe-users text-muted mb-0"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row items-align-center">
                    <div className="col-md-6">
                      <p className="mb-0">
                        <strong className="mb-0 text-uppercase text-muted">
                          Earning
                        </strong>
                      </p>
                      <h3>$2,562</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className="col-md-6 my-4 text-center">
                      <div lass="chart-box mx-4">
                        <div id="radialbarWidget"></div>
                      </div>
                    </div>
                    <div className="col-md-6 border-top pt-3">
                      <p className="mb-1">
                        <strong className="text-muted">Cost</strong>
                      </p>
                      <h4 className="mb-0">108</h4>
                      <p className="small text-muted mb-0">
                        <span>37.7% Last week</span>
                      </p>
                    </div>
                    <div className="col-md-6 border-top pt-3">
                      <p className="mb-1">
                        <strong className="text-muted">Revenue</strong>
                      </p>
                      <h4 className="mb-0">1168</h4>
                      <p className="small text-muted mb-0">
                        <span>-18.9% Last week</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title mb-0">Products</strong>
                  <Link to={`/add-product`} className="add-product">
                    Add
                  </Link>
                </div>
                {products.map(({ id, images, name, alt, price, quantity }) => (
                  <div className="card-body" key={id}>
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            <img
                              src={images[0]}
                              alt={alt}
                              className="thumbnail"
                            />
                          </div>
                          <div className="col">
                            <strong>
                              {id}. {name}
                            </strong>
                            <div className="my-1 text-muted small mb-0">
                              &nbsp;&nbsp; Quantity: {quantity}
                            </div>
                          </div>
                          <div className="col-auto txt-align">
                            <strong>${price}</strong>
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle action"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="dropdownMenuButton1"
                              >
                                Action
                                <span className="caret"></span>
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <Link
                                    to={`/edit-product/${id}`}
                                    className="form-links"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="form-links"
                                    onClick={() => deleteProduct(id)}
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-12 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title mb-0">Users</strong>
                </div>
                {users.map(({ _id, firstName, lastName, email, role }) => (
                  <div className="card-body" key={_id}>
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            <span className="fe fe-24 fe-user text-muted mb-0"></span>
                          </div>
                          <div className="col">
                            <strong>
                              {lastName}, {firstName}
                            </strong>
                            <div className="my-1 text-muted small mb-0">
                              Email: <strong>{email}</strong>, Role:{" "}
                              <strong>{role}</strong>
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link
                              to="#"
                              className="form-links"
                              onClick={() => deleteUser(_id)}
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
