import React from "react";
import "./notice.css";
import { Link } from "react-router-dom";

const notice = () => {
  return (
    <div className="section-notice">
      <div className="legacy">
        <div className="legacy-left">
          <strong>Store</strong>
          <br></br>All sales are final. We do not offer cancellations or
          refunds. Please visit our{" "}
          <Link to="/privacy" className="policy-link">
            privacy policy
          </Link>{" "}
          for more details.
        </div>

        <div className="legacy-right">
          <strong>
            <a href="/cart" className="btn-cart">
              <img
                src={require("../main/cart.png")}
                alt="shopping cart icon"
                className="cart"
              ></img>
              View Cart
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default notice;
