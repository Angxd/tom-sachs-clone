import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./editform.css";

const ProductForm = () => {
  const [productInfo, setProductInfo] = useState();

  const [imageUpload, setImages] = useState([]);

  const productId = useParams().id;

  const updateProduct = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("id", id ?? productInfo.id);
      formData.append("name", name ?? productInfo.name);
      formData.append("price", price ?? productInfo.price);
      formData.append("quantity", quantity ?? productInfo.quantity);
      for (let image of imageUpload) {
        formData.append("productImage", image);
      }
      formData.append("description", description ?? productInfo.description);

      await axios.put(
        `http://localhost:5100/api/products/${productId}`,
        formData
      );

      alert("Product updated");
    } catch (error) {
      console.error("Error in updating product information", error);

      alert("Something went wrong");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const getProductInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5100/api/products/${productId}`
        );

        setProductInfo(data);
      } catch (error) {
        console.error("Error in getProducts", error);

        alert("Something went wrong");
      }
    };

    getProductInfo();
  }, [productId]);

  const { id, name, price, quantity, images, alt, description } =
    productInfo || {};

  const onChange = (e) => {
    setProductInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const textarea = (e) => {
    e.target.style.height = "37px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="product-edit">
      <Helmet>
        <title>Edit Form - Tom Sachs</title>
      </Helmet>
      <section
        className="page-width"
        style={{ marginBottom: 75, marginTop: 100 }}
      >
        <div className="header-edit">Edit Product info</div>
        {productInfo ? (
          <form
            className="edit-form"
            id="editProduct"
            encType="multipart/form-data"
          >
            <span
              style={{ textAlign: "center", fontSize: 22, marginBottom: 20 }}
            >
              &nbsp;ID: {id} <br /> Product: {name}
            </span>
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
              onChange={onChange}
              onClick={textarea}
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
            />
            <label htmlFor="images" className="label-header">
              Images{" "}
              {images?.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  alt={alt}
                  style={{ height: 35, width: 35, marginRight: 5 }}
                />
              ))}
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
              onChange={onChange}
              onClick={textarea}
              onKeyDown={textarea}
            />
            <div>
              <button
                type="submit"
                className="create-btn"
                id="create-button"
                onClick={updateProduct}
              >
                UPDATE
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
        ) : (
          <div className="failed-to-load">Loading...</div>
        )}
      </section>
    </div>
  );
};

export default ProductForm;
