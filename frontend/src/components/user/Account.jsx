import React from "react";
import { StoreHeader, Notice, Footer } from "../store";
import { Helmet } from "react-helmet";
import "./account.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

const Account = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer) || {};

  return (
    <div>
      <Helmet>
        <title>Account - Tom Sachs</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <div className="page-width">
        <div className="header-account">My Account</div>
        <div className="header-logOut">
          <button className="logout-btn" onClick={() => dispatch(logoutUser())}>
            <Link to="/store" className="goStore">
              {" "}
              Log out
            </Link>
          </button>
        </div>

        <div className="grid-2-cols account-cols">
          <div>
            <div className="header-accountInfo">ORDER HISTORY</div>
            <div className="text-accountInfo">
              You haven't placed any orders yet.
            </div>
          </div>
          <div>
            <div className="header-accountInfo">ACCOUNT DETAILS</div>
            <div className="text-accountInfo">
              {user.firstName + " " + user.lastName}
            </div>
            <div className="text-accountInfo">United States</div>
            <div>
              {" "}
              <Link to="#addresss" className="address-btn">
                VIEW ADDRESS
              </Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 100, marginBottom: 60, marginLeft: 60 }}>
          <Link to="/privacy" className="bottom">
            Privacy Policy
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
