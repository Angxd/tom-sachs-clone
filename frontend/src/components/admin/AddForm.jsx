import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import "./addform.css";

const AddForm = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
    description: "",
    alt: "",
  });
  const [imageUpload, setImages] = useState([]);

  const { id, name, price, quantity, description, alt } = newProduct;

  const onChange = (e) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addProduct = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("quantity", quantity);
      for (let image of imageUpload) {
        formData.append("productImage", image);
      }
      formData.append("description", description);

      await axios.post(`http://localhost:5100/api/products`, formData);

      alert("Product created");
    } catch (error) {
      console.error("Error in updating product information", error);

      alert("Something went wrong");
    }
  };

  const textarea = (e) => {
    e.target.style.height = "37px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="product-add">
      <Helmet>
        <title>Add Form - Tom Sachs</title>
      </Helmet>
      <section
        className="page-width"
        style={{ marginBottom: 75, marginTop: 100 }}
      >
        <div className="header-edit">Add New Product</div>
        <form
          className="edit-form"
          id="editProduct"
          encType="multipart/form-data"
        >
          <span
            style={{ textAlign: "center", fontSize: 22, marginBottom: 20 }}
          ></span>
          <label htmlFor="id" className="label-header">
            ID
          </label>
          <textarea
            type="text"
            id="id"
            name="id"
            value={id}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onClick={textarea}
            onChange={onChange}
            required
          />
          <label htmlFor="name" className="label-header">
            Name
          </label>
          <textarea
            type="text"
            id="name"
            name="name"
            value={name}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onClick={textarea}
            onChange={onChange}
            required
          />
          <label htmlFor="price" className="label-header">
            Price
          </label>
          <textarea
            type="text"
            id="price"
            name="price"
            value={price}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={onChange}
            required
          />
          <label htmlFor="quantity" className="label-header">
            Quantity
          </label>
          <textarea
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={onChange}
            required
          />
          <label htmlFor="images" className="label-header">
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            className="edit-fields"
            onChange={(e) => setImages(e.target.files)}
          />
          <label htmlFor="alt" className="label-header">
            image alt
          </label>
          <textarea
            type="text"
            id="alt"
            name="alt"
            value={alt}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onChange={onChange}
            required
          />
          <label htmlFor="description" className="label-header">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            className="edit-fields"
            autoCapitalize="off"
            autoCorrect="off"
            onClick={textarea}
            onKeyDown={textarea}
            onChange={onChange}
          />
          <div>
            <button
              type="submit"
              className="create-btn"
              id="create-button"
              onClick={addProduct}
            >
              CREATE
            </button>
          </div>
          <div className="back-to-dashboard">
            <Link to="/admin" className="btn-home">
              <svg className="left-arrow" viewBox="0 0 20 8">
                <path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z"></path>
              </svg>
              &nbsp; BACK TO DASHBOARD
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddForm;
