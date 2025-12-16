import React, { useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import contentImg1 from "../img/banner_Hero1.jpg"
import contentImg2 from "../img/banner_Hero2.jpg"
import contentImg3 from "../img/banner_Hero3.jpg"
const HeroSlider = () => {
  return (
    <div className="hero">
      <div className="container">
        <Swiper 
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
         pagination={true} modules={[Pagination , Autoplay]} className="mySwiper">
          <SwiperSlide>
            <div className="content">
              <h2>Introduction the new</h2>
              <h4>Microsoft Xbox <br/> 360 Controller</h4>
              <p>
                Windows Xp/10/7/8 ps3 Tv Box
              </p>
              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>
            <img src={contentImg1} alt="Hero Banner 1" />
          </SwiperSlide>





          <SwiperSlide>
            <div className="content">
              <h2>Welcome to Our Store</h2>
              <h4>Discover Amazing Products <br/> 360 Devices</h4>
              <p>
                Find the best deals on electronics, fashion, home goods, and
                more. Shop now and enjoy exclusive offers!
              </p>
              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>
            <img src={contentImg2} alt="Hero Banner 2" />

          </SwiperSlide>




          <SwiperSlide>
            <div className="content">
              <h2>Welcome to Our Store</h2>
              <h4>Discover Amazing Products</h4>
              <p>
                Find the best deals on electronics, fashion, home goods, and
                more. Shop now and enjoy exclusive offers!
              </p>
              <Link to="/" className="btn">
                Shop Now
              </Link>
            </div>
            <img src={contentImg3} alt="Hero Banner 3" />
          </SwiperSlide>{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
