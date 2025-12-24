import React, { useEffect } from "react";
import "./SlideProudect.css";
import Proudect from "./Proudect";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


     {/* هنا في اكتر من بروربس التالته في صفحة الهوم و الاخير في صفحة الديتبز بتاعت المنتج */}

const SlideProudect = ({ titel, des, category, currentId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
     {/* ايستدعا الكاتيجوؤي كلها المنتج اللي جواه */}

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

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

             {/* بنادي صفحة البروديك اللي هي فيها كل التفاصيل اللي هظهرها جواه السلايد بقا كصورة  و اسم وريت و سعر وكده */}

          {products
            .filter((product) => product.id !== currentId)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <Proudect products={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideProudect;
