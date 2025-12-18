import React, { useEffect } from "react";
import "./SlideProudect.css";
import Proudect from "./Proudect";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SlideProudect = ({titel , des, category}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => setProducts(data.products));
}, [category]);

  return (
    <div className="slide_proudect slide">
      <div className="container">
        <div className="top_slide">
          <h2>{titel}</h2>
          <p>{des}</p>
        </div>
      
           <Swiper
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <Proudect product={product} />
            </SwiperSlide>
          ))}
 
        </Swiper>
      </div>
    </div>
  );
};

export default SlideProudect;
