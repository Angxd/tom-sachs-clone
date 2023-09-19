import React from "react";
import { Header, Footer } from "../store";
import { Helmet } from "react-helmet";
import "./contacts.css";

const contactinfo = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts - Tom Sachs</title>
      </Helmet>
      <Header />
      <div className="section-contacts">
        <div className="row-one">
          <p className="contact-info">Please direct all inquiries to:</p>
          <p className="contact-info">info@tomsachs.org</p>
          <p className="contact-info">
            <br></br>
          </p>
          <p className="contact-info">
            For artwork or show related inquiries only, please reach out to our
            gallery partners.
          </p>
        </div>
        <div className="row-two">
          <p className="contact-info">ACQUAVELLA GALLERIES</p>
          <p className="contact-info">18 East 79th Street</p>
          <p className="contact-info">New York, NY 10075 USA</p>
          <p className="contact-info">
            <br></br>
          </p>
          <p className="contact-info">BALDWIN GALLERY</p>
          <p className="contact-info">209 South Galena Street</p>
          <p className="contact-info">Aspen, Colorado 81611 USA</p>
          <p className="contact-info">
            <br></br>
            <br></br>
            <br></br>
          </p>
          <p className="contact-info">TOMIO KOYAMA GALLERY</p>
          <p className="contact-info">Saga 1-8-13-2F Koto-Ku</p>
          <p className="contact-info">Tokyo 135-0031 Japan</p>
        </div>
        <div className="row-three">
          <p className="contact-info">GALERIE THADDAEUS ROPAC PARIS</p>
          <p className="contact-info">7 Rue Debelleyme</p>
          <p className="contact-info">75003 Paris FRANCE</p>
          <p className="contact-info">
            <br></br>
          </p>
          <p className="contact-info">GALERIE THADDAEUS ROPAC SALZBURG</p>
          <p className="contact-info">Mirabellplatz 2</p>
          <p className="contact-info">5020 Salzburg AUSTRIA</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactinfo;
