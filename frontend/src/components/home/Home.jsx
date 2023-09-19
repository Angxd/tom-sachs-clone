import React from "react";
// import { useDispatch, useSelector } from "react-redux"; { useEffect }
import { Header } from "../store";
import { Helmet } from "react-helmet";
// import Spinner from "react-bootstrap/Spinner";
import "./home.css";
// import { loginUser } from "../../redux/actions/authActions";

const Home = () => {
  // const dispatch = useDispatch();
  // const authReducer = useSelector((state) => state.authReducer);
  // console.log("...authReducer", authReducer);

  // useEffect(() => {
  //   try {
  //     dispatch(loginUser("abc@gmail.com", "1234"));
  //   } catch (error) {
  //     console.log("something went wrong", error);
  //   }
  // }, [dispatch]);

  return (
    <div className="head">
      <Helmet>
        <title>Home - Tom Sachs</title>
      </Helmet>
      <Header />
      <div className="home-page">
        {/* {authReducer.isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )} */}

        <img
          src={require("./Homepage.jpg")}
          alt="Home-page-img"
          className="home-img"
          style={{ height: "600px", width: "500px" }}
        />
        <div>
          <p className="home-head">TOM SACHS: Rocket Factory Paintings</p>

          <p className="home-subhead">Thaddaeus Ropac, Seoul</p>
          <p className="home-subhead">122-1 Dokseodang-ro, Yongsan-gu</p>
          <p className="home-subhead">Seoul, South Korea</p>
          <p className="home-subhead">June 24 - August 20, 2022</p>
        </div>

        <div className="home-links">
          <a
            href="https://www.instagram.com/tomsachs/"
            alt="instagram"
            className="social-links"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/tom_sachs"
            alt="twitter"
            className="social-links"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/user/tomsachsmovies"
            alt="youtube"
            className="social-links"
          >
            Youtube
          </a>
          <a
            href="https://vimeo.com/tomsachs/"
            alt="vimeo"
            className="social-links"
          >
            Vimeo
          </a>
          <a
            href="https://www.facebook.com/teamsachs"
            alt="facebook"
            className="social-links"
          >
            Facebook
          </a>
          <a
            href="http://tenbullets.com"
            alt="ten-bullets"
            className="social-links"
          >
            tenbullets.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
