import React from "react";
import { Header, Footer } from "../store";
import { Helmet } from "react-helmet";

const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <Header />
      <div className="failed-to-load" style={{ marginBottom: 450 }}>
        Coming Soon...
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
