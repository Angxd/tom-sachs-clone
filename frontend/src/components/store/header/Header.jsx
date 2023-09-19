import React from "react";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="section-header">
      <div className="header">
        <Link to="#" className="logo">
          <img
            className="logo-img"
            src="https://cdn.shopify.com/s/files/1/0044/2813/6551/files/logo_360x.png?v=1548992272"
            alt="tom sachs logo"
          />
        </Link>
      </div>
      <Navbar className="head-main-nav" variant="light">
        <Container>
          <Nav className="head-links">
            <Link to="/" className="head-nav-link">
              HOME
            </Link>
            <Link to="/soon" className="head-nav-link">
              EXHIBITIONS
            </Link>
            <Link to="/soon" className="head-nav-link">
              MOVIES
            </Link>
            <Link to="/store" className="head-nav-link">
              STORE
            </Link>
            <Link to="/soon" className="head-nav-link">
              BIOGRAPHY
            </Link>
            <Link to="/contacts" className="head-nav-link">
              CONTACTS
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
