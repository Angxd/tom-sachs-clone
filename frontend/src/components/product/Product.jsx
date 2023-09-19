import React, { useEffect, useState } from "react";
import { StoreHeader, Notice, Footer } from "../store";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { useSelector } from "react-redux";
import "./product.css";
import ProductSpecifics from "./ProductSpecifics.jsx";

const Products = () => {
  const [productInfo, setProductInfo] = useState();
  const [title, setTitle] = useState("");

  // const authReducer = useSelector((state) => state.authReducer);

  // const addToCart = async (_id) => {
  //   try {
  //     const productDetails = {
  //       product: _id,
  //       quantity: 1,
  //       size: sizes,
  //       user: authReducer.user._id,
  //       status: "ACTIVE",
  //     };
  //     await axios.post(`http://localhost:5100/api/cart`, productDetails, {
  //       headers: { Authorization: `Bearer ${authReducer.user.token}` },
  //     });

  //     alert("Product added to cart");
  //   } catch (error) {
  //     console.error("Error in adding product to cart", error);
  //   }
  // };

  const productId = useParams().id;

  useEffect(() => {
    window.scrollTo(0, 0);

    const getProductInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5100/api/products/${productId}`
        );

        setProductInfo(data);
        setTitle(data.name);
      } catch (error) {
        console.error("Error in getProducts", error);

        alert("Product not found");
      }
    };

    getProductInfo();
  }, [productId]);

  const { id, images, name, alt, price, description } = productInfo || {};

  const [index, setIndex] = useState(0);

  const img = document.querySelector("#zoom");

  function zoomIn(event) {
    if (img) {
      img.style.transformOrigin = `${event.clientX - 165}px 
    ${event.clientY - 190}px`;
      img.style.transform = "scale(2)";
    }
  }

  function zoomOut(event) {
    if (img) {
      img.style.transformOrigin = `center center`;
      img.style.transform = "scale(1)";
    }
  }

  return (
    <div>
      <Helmet>
        <title>{title ? title + " - Tom Sachs" : "Store - Tom Sachs"}</title>
      </Helmet>
      <StoreHeader />
      <Notice />
      {productInfo ? (
        <div className="section-productinfo">
          <div className="grid-2-cols" key={id}>
            <div className="images-section">
              <div className="productinfo-card">
                <div className="productinfo-img">
                  <div className="productinfo-img-zoom">
                    <img
                      id="zoom"
                      src={index > 0 ? images[index] : images[0]}
                      alt={alt}
                      className="productinfo-image"
                      onMouseMove={zoomIn}
                      onMouseOver={zoomIn}
                      onMouseOut={zoomOut}
                    />
                  </div>
                  <div className="grid-4-cols">
                    {images?.map((item, i) => (
                      <img
                        key={i}
                        src={item}
                        alt={alt}
                        className={`productinfo-thumbnails ${
                          index === i ? "outlined" : ""
                        }`}
                        onClick={() => setIndex(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <div className="productinfo-name">{name}</div>
              <div className="productinfo-price">${price}</div>

              <ProductSpecifics />

              <div className="productinfo-description">
                {description.split("●").join("   ● ")}
              </div>

              <ul className="social-sharing">
                <li className="sharing-list">
                  <Link
                    target="_blank"
                    to={`//www.facebook.com/sharer.php?u=http://localhost:3000/product/${id}`}
                    className="sharing-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                      className="social-svg"
                    >
                      <path
                        fill="#3F51B5"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                      ></path>
                    </svg>
                    <span>SHARE</span>
                  </Link>
                </li>

                <li className="sharing-list">
                  <Link
                    target="_blank"
                    to={`//twitter.com/share?text=${name}&url=http://localhost:3000/product/${id}`}
                    className="sharing-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                      className="social-svg"
                    >
                      <path
                        fill="#03A9F4"
                        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                      ></path>
                    </svg>
                    <span>TWEET</span>
                  </Link>
                </li>

                <li className="sharing-list">
                  <Link
                    target="_blank"
                    to={`//pinterest.com/pin/create/button/?url=http://localhost:3000/product/${id}&media=${images[index]}&description=${name}`}
                    className="sharing-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                      className="social-svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#E60023"></circle>
                      <path
                        fill="#FFF"
                        d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"
                      ></path>
                    </svg>
                    <span>PIN IT</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="back-to-home">
              <Link to="/store" className="btn-home">
                <svg className="left-arrow" viewBox="0 0 20 8">
                  <path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z"></path>
                </svg>
                &nbsp; BACK TO STORE PAGE
              </Link>
            </div>
          </div>
          <div style={{ marginTop: 80, marginBottom: 60 }}>
            <Link to="/privacy" className="product-privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      ) : (
        <div class="failed-to-load">
          <div className="failed-to-load spinner-border"></div>
          <div>Loading</div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;
