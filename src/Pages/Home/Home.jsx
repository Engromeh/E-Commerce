import React, { useEffect } from "react";
import HeroSlider from "../../Components/HeroSlider";
import "./Home.css";
import SlideProudect from "../../Components/SlideProudect/SlideProudect";
const Home = () => {

  return (
    <div>
      <HeroSlider />

      <SlideProudect
        titel="mobile"
        des="Discover our latest collection of mobile products"
        category="smartphones"
      />

      <SlideProudect
        titel="laptob"
        des="Discover our latest collection of mobile products"
        category="laptops"
      />

      <SlideProudect
        titel="Watch"
        des="Discover our latest collection of mobile products"
        category="mobile-accessories"
      />

      <SlideProudect
        titel="Car"
        des="Discover our latest collection of mobile products"
        category="sports-accessories"
      />
    </div>
  );
};

export default Home;
