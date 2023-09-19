import React, { useEffect, useState } from "react";
import { StoreHeader, Notice, Footer } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./cart.css";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  const authReducer = useSelector((state) => state.authReducer);

  const removeProduct = async (_id) => {
    try {
      const remove = { status: "INACTIVE" };
      await axios.put(`http://localhost:5100/api/cart/${_id}`, remove, {
        headers: { Authorization: `Bearer ${authReducer.user.token}` },
      });

      //alert("Product removed");
    } catch (error) {
      console.error("Error in removing product", error);

      alert("Something went wrong");
    }
  };

  useEffect(() => {
    const getCart = async () => {
      try {
        if (localStorage.getItem("user") === null) {
          return <Navigate to="/login" />;
        } else {
          const { data } = await axios.get(`http://localhost:5100/api/cart`, {
            headers: { Authorization: `Bearer ${authReducer.user.token}` },
          });
          setCart(data);
        }
      } catch (error) {
        console.error("Error in getting cart", error);

        alert("Something went wrong");
      }
    };

    getCart();
  });

  return (
    <div>
      <Helmet>
        <title>Your Shopping Cart</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <div className="section-cart">
        <div className="page-width">
          <div className="header-cart">Your Cart</div>
          <div className="grid grid-4-cols col-y">
            <span className="mt-4 pb-4 border-bottom">Product</span>
            <span className="mt-4 pb-4 border-bottom">Price</span>
            <span className="mt-4 pb-4 border-bottom text-center">
              Quantity
            </span>
            <span className="mt-4 pb-4 border-bottom text-right">Total</span>
          </div>

          {cart.map(({ _id, product, quantity }) => (
            <div key={_id}>
              <div className="grid grid-4-cols col-y pb-4 border-bottom">
                <div className="cart-product-name mt-4">
                  <div className="img-name">
                    <img
                      src={product.images[0]}
                      alt={product.alt}
                      style={{ height: 80, width: "auto" }}
                    />
                    <div className="name-remove">
                      {product.name}
                      <Link
                        to="#"
                        className="mt-2 delete-from-cart"
                        onClick={() => removeProduct(_id)}
                      >
                        REMOVE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="cart-product-price mt-4">
                  <div className="cart-price">${product.price}</div>
                </div>

                <div className="cart-product-quantity mt-4">
                  <div className="cart-quantity">{quantity}</div>
                </div>

                <div className="cart-product-total mt-4">
                  <div className="cart-total">${product.price * quantity}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="subtotal mt-5">
            <span>Sub total</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddToCart;
