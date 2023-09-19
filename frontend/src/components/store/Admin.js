import React from "react";
import { AdminHeader, AdminDashboard } from ".";
import { Helmet } from "react-helmet";

function Store() {
  return (
    <div className="Store">
      <Helmet>
        <title>Admin Store - Tom Sachs</title>
      </Helmet>
      <AdminHeader />
      <AdminDashboard />
    </div>
  );
}

export default Store;
