import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="section-footer">
      <div className="footer">
        <div className="foot-text">
          &copy;&nbsp;2022,{" "}
          <Link to="/store" className="store-link">
            Tom Sachs Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
