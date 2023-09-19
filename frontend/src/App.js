import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Contacts,
  Home,
  Store,
  Admin,
  Product,
  Privacy,
  Soon,
  Login,
  NewUser,
  Cart,
  Account,
  EditForm,
  AddForm,
} from "./components/store";
import "./App.css";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute admin>
                <Admin />
              </PrivateRoute>
            }
          />
          {/* admin page ^^^ */}
          <Route exact path="/" element={<Home />} />
          {/* home page ^^^ */}
          <Route exact path="/store" element={<Store />} />
          {/* store page ^^^ */}
          <Route exact path="/privacy" element={<Privacy />} />
          {/* privacy page ^^^ */}
          <Route exact path="/product/:id" element={<Product />} />
          {/* product info page ^^^ */}
          <Route exact path="/contacts" element={<Contacts />} />
          {/* contact info page ^^^ */}
          <Route exact path="/soon" element={<Soon />} />
          {/* coming soon pages ^^^ */}
          <Route
            exact
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          {/* user login page ^^^ */}
          <Route exact path="/create-user" element={<NewUser />} />
          {/* create new account page ^^^ */}
          <Route
            exact
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          {/* Add to cart page ^^^ */}
          <Route exact path="/account" element={<Account />} />
          {/* Account page ^^^ */}
          <Route exact path="/edit-product/:id" element={<EditForm />} />
          {/* product update form page ^^^ */}
          <Route exact path="/add-product" element={<AddForm />} />
          {/* product update form page ^^^ */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
