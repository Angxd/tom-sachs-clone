import React from "react";
import { StoreHeader, Notice, Footer } from "../store";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./newUser.css";

const NewUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    axios.post("http://localhost:5100/api/auth", userData);

    navigate("/store");
  };

  return (
    <div>
      <Helmet>
        <title>Create Account - Tom Sachs</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      <section className="page-width" style={{ marginBottom: 75 }}>
        <div className="header-createAc">Create Account</div>

        <form className="Ac-form" id="createAccount" onSubmit={onSubmit}>
          <label for="firstName" className="label-header">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
            onChange={onChange}
          />
          <label for="lastName" className="label-header">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
            onChange={onChange}
          />
          <label for="email" className="label-header">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
            onChange={onChange}
          />
          <label for="password" className="label-header">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="text-fields"
            autoCapitalize="off"
            autoCorrect="off"
            required
            onChange={onChange}
          />
          <div>
            <button type="submit" className="create-btn" id="create-button">
              CREATE
            </button>
          </div>
        </form>
        {/* <div className="registration-success">Sucessfully Registered</div> */}
      </section>
      <Footer />
    </div>
  );
};

export default NewUser;
