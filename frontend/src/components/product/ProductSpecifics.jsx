import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductSpecifics = () => {
  const [sizes, setSizes] = useState("");
  const [productInfo, setProductInfo] = useState();

  const authReducer = useSelector((state) => state.authReducer);

  const addToCart = async (_id) => {
    try {
      const productDetails = {
        product: _id,
        quantity: 1,
        size: sizes,
        user: authReducer.user._id,
        status: "ACTIVE",
      };
      await axios.post(`http://localhost:5100/api/cart`, productDetails, {
        headers: { Authorization: `Bearer ${authReducer.user.token}` },
      });

      alert("Product added to cart");
    } catch (error) {
      console.error("Error in adding product to cart", error);
    }
  };

  const productId = useParams().id;

  useEffect(() => {
    window.scrollTo(0, 0);

    const getProductInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5100/api/products/${productId}`
        );

        setProductInfo(data);
      } catch (error) {
        console.error("Error in getProducts", error);

        alert("Product not found");
      }
    };

    getProductInfo();
  }, [productId]);

  const { _id, id } = productInfo || {};

  return (
    <div>
      {id === 1 ? (
        <form>
          <div className="dropbox">
            <label style={{ marginBottom: 5 }}>Size</label>
            <select
              className="box-sizes"
              value={sizes}
              onChange={(e) => setSizes(e.target.value)}
            >
              <option defaultValue="WMNS 5.5 / MENS 4 / EU 36 / 23 CM">
                WMNS 5.5 / MENS 4 / EU 36 / 23 CM
              </option>
              <option value="WMNS 6 / MENS 4.5 / EU 36 / 23 CM">
                WMNS 6 / MENS 4.5 / EU 36 / 23 CM
              </option>
              <option value="WMNS 6.5 / MENS 5 / EU 37.5 / 23.5 CM">
                WMNS 6.5 / MENS 5 / EU 37.5 / 23.5 CM
              </option>
              <option value="WMNS 7 / MENS 5.5 / EU 38 / 24 CM">
                WMNS 7 / MENS 5.5 / EU 38 / 24 CM
              </option>
              <option value="WMNS 7.5 / MENS 6 / EU 38.5 / 24 CM">
                WMNS 7.5 / MENS 6 / EU 38.5 / 24 CM
              </option>
              <option value="WMNS 8 / MENS 6.5 / EU 39 / 24.5 CM">
                WMNS 8 / MENS 6.5 / EU 39 / 24.5 CM
              </option>
              <option value="WMNS 8.5 / MENS 7 / EU 40 / 25 CM">
                WMNS 8.5 / MENS 7 / EU 40 / 25 CM
              </option>
              <option value="WMNS 9 / MENS 7.5 / EU 40.5 / 25.5 CM">
                WMNS 9 / MENS 7.5 / EU 40.5 / 25.5 CM
              </option>
              <option value="WMNS 9.5 / MENS 8 / EU 41 / 26 CM">
                WMNS 9.5 / MENS 8 / EU 41 / 26 CM
              </option>
              <option value="WMNS 10 / MENS 8.5 / EU 42 / 26.5 CM">
                WMNS 10 / MENS 8.5 / EU 42 / 26.5 CM
              </option>
              <option value="WMNS 10.5 / MENS 9 / EU 42.5 / 27 CM">
                WMNS 10.5 / MENS 9 / EU 42.5 / 27 CM
              </option>
              <option value="WMNS 11 / MENS 9.5 / EU 43 / 27.5 CM">
                WMNS 11 / MENS 9.5 / EU 43 / 27.5 CM
              </option>
              <option value="WMNS 11.5 / MENS 10 / EU 44 / 28 CM">
                WMNS 11.5 / MENS 10 / EU 44 / 28 CM
              </option>
              <option value="WMNS 12 / MENS 10.5 / EU 44.5 / 28.5 CM">
                WMNS 12 / MENS 10.5 / EU 44.5 / 28.5 CM
              </option>
              <option value="WMNS 12.5 / MENS 11 / EU 45 / 29 CM">
                WMNS 12.5 / MENS 11 / EU 45 / 29 CM
              </option>
              <option value="WMNS 13 / MENS 11.5 / EU 45.5 / 29.5 CM">
                WMNS 13 / MENS 11.5 / EU 45.5 / 29.5 CM
              </option>
              <option value="WMNS 13.5 / MENS 12 / EU 46 / 30 CM">
                WMNS 13.5 / MENS 12 / EU 46 / 30 CM
              </option>
              <option value="WMNS 14.5 / MENS 13 / EU 47.5 / 31 CM">
                WMNS 14.5 / MENS 13 / EU 47.5 / 31 CM
              </option>
              <option value="WMNS 15.5 / MENS 14 / EU 48.5 / 32 CM">
                WMNS 15.5 / MENS 14 / EU 48.5 / 32 CM
              </option>
              <option value="WMNS 16.5 / MENS 15 / EU 49.5 / 33 CM">
                WMNS 16.5 / MENS 15 / EU 49.5 / 33 CM
              </option>
            </select>
          </div>
          <div className="add-to-cart-full">
            <Link
              to="#"
              className="btn-add-to-cart-full"
              onClick={() => addToCart(_id)}
            >
              ADD TO CART
            </Link>
          </div>
        </form>
      ) : (
        ""
      )}
      {id === 2 ? (
        <form>
          <div className="dropbox">
            <label style={{ marginBottom: 5 }}>Size</label>
            <select className="box-sizes">
              <option value="extra-small">XS</option>
              <option defaultValue="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra-large">XL</option>
              <option value="extra-extra-large">XXL</option>
            </select>
          </div>
          <div className="add-to-cart-full">
            <Link
              to="#"
              className="btn-add-to-cart-full"
              onClick={() => addToCart(_id)}
            >
              ADD TO CART
            </Link>
          </div>
        </form>
      ) : (
        ""
      )}
      {id === 3 ? (
        <form>
          <div className="dropbox">
            <label style={{ marginBottom: 5 }}>Size</label>
            <select className="box-sizes">
              <option defaultValue="Small: WMNS 5-7 / MENS 3.5-5.5 / EU 35.5-38 / 22.5-24 CM">
                Small: WMNS 5-7 / MENS 3.5-5.5 / EU 35.5-38 / 22.5-24 CM
              </option>
              <option value="Medium/Large: WMNS 7.5-16.5 / MENS 6 - 15 / EU 38.5-49.5 / 24-33 CM">
                Medium/Large: WMNS 7.5-16.5 / MENS 6 - 15 / EU 38.5-49.5 / 24-33
                CM
              </option>
            </select>
          </div>
          <div className="add-to-cart-full">
            <Link
              to="#"
              className="btn-add-to-cart-full"
              onClick={() => addToCart(_id)}
            >
              ADD TO CART
            </Link>
          </div>
        </form>
      ) : (
        ""
      )}
      {id === 4 || id === 5 || id === 6 || id === 7 || id === 8 || id === 9 ? (
        <div className="add-to-cart">
          <Link
            to="#"
            className="btn-add-to-cart"
            onClick={() => addToCart(_id)}
          >
            ADD TO CART
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductSpecifics;
