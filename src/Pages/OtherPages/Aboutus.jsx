import React from "react";
import "./OtherPages.css";
import Logo from "../../img/Romeh-removebg-preview.png";


const Aboutus = () => {
  return (
     <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and values.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong style={{fontWeight:"bolder" , color:"#0090f0" , fontSize:"20px"}}>RoMeH Store</strong>! We are passionate about providing the best
            products and delivering exceptional customer service. Our mission
            is to make shopping easy, fast, and enjoyable for everyone.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide high-quality products that meet our customers’ needs,
            ensuring satisfaction, reliability, and trust in everything we do.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>High Quality Products</li>
            <li>Customer Satisfaction</li>
            <li>Fast Delivery</li>
            <li>Secure Payments</li>
            <li>Transparency & Integrity</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src={Logo}
            alt="About Us"
          />
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
