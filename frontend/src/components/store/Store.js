import React, { useEffect } from "react";
import { Notice, Main, Footer, StoreHeader } from ".";
import { Helmet } from "react-helmet";

function Store() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Store">
      <Helmet>
        <title>Store - Tom Sachs</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <Main />
      <Footer />
    </div>
  );
}

export default Store;
