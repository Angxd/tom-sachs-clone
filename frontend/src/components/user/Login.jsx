import React from "react";
import { useDispatch } from "react-redux";
import { StoreHeader, Notice, Footer } from "../store";
import { Helmet } from "react-helmet";
import "./login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();

  const loginSubmit = async (e) => {
    e.preventDefault();

    const forms = document.forms["form"];

    await dispatch(loginUser(forms["email"].value, forms["password"].value));
  };

  return (
    <div className="login-page">
      <Helmet>
        <title>Account - Tom Sachs</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <div className="page-width margin-btm-large">
        <div className="header-login">Login</div>
        <form
          method="post"
          name="form"
          className="login-form"
          onSubmit={loginSubmit}
        >
          <label htmlFor="email" className="label-header">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
          />
          <label htmlFor="password" className="label-header">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
          />
          <div>
            <Link to="#forgotpassword" className="forgot-password-link">
              Forgot your password?
            </Link>

            <input type="submit" className="signIn-btn" value="SIGN IN" />

            <Link to="/create-user" className="create-account">
              Create account
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
