import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./main.css";

const Main = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async (req, res) => {
    try {
      const { data } = await axios.get(`http://localhost:5100/api/products`);

      setProducts(data);
    } catch (error) {
      console.error("Error in getProducts", error);

      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="section-main">
      <div className="shopping">
        <div className="page-width">
          <ul className="grid-3-cols">
            {products.map(({ id, images, name, alt, price }) => (
              <li className="grid-item" key={id}>
                <div className="main-product-card">
                  <Link to={`/product/${id}`} className="product">
                    <div style={{ overflow: "hidden" }}>
                      <img
                        src={images?.length ? images[0] : null}
                        alt={alt}
                        className="product-img"
                      ></img>
                    </div>
                    <div className="product-name">{name}</div>
                    <div className="price">${price}</div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 80, marginBottom: 60 }}>
            <Link to="/privacy" className="bottom">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
