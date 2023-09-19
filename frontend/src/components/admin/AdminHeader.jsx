import React from "react";
import "./adminheader.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import User from "../store/user";
import { logoutUser } from "../../redux/actions/authActions";

const StoreHeader = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer) || {};

  return (
    <div className="section-storeheader">
      <div className="store-header">
        <Link to="#" className="logo">
          <img
            className="logo-img"
            src="https://cdn.shopify.com/s/files/1/0044/2813/6551/files/logo_360x.png?v=1548992272"
            alt="tom sachs logo"
          />
        </Link>
        <div className="login">
          <div>
            {user ? (
              <div style={{ color: "#666" }} className="login-info">
                <div className="welcome">{`Welcome ${user.firstName}`} </div>
                <div style={{ marginTop: 5 }}>
                  <button
                    className="logout-btn"
                    onClick={() => dispatch(logoutUser())}
                  >
                    <Link to="/store" className="goStore">
                      {" "}
                      Logout
                    </Link>
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {user ? (
            <Link to="#account" className="user-info">
              <div>
                <User />
              </div>
            </Link>
          ) : (
            <Link to="/login" className="user-info">
              <div>
                <User />
              </div>
            </Link>
          )}
        </div>
      </div>
      <Navbar className="store-main-nav" variant="light">
        <Container>
          <Nav className="store-links">
            <Link to="#soon" className="store-nav-link">
              CHART
            </Link>
            <Link to="#soon" className="store-nav-link">
              CALENDAR
            </Link>
            <Link to="/admin" className="store-nav-link">
              DASHBOARD
            </Link>
            <Link to="#soon" className="store-nav-link">
              ORDERS
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default StoreHeader;
