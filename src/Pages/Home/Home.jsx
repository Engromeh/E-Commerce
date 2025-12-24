import HeroSlider from "../../Components/HeroSlider/HeroSlider";
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
        titel="mobile-accessories"
        des="Discover our latest collection of mobile products"
        category="mobile-accessories"
      />

      <SlideProudect
        titel="sports-accessories"
        des="Discover our latest collection of mobile products"
        category="sports-accessories"
      />
        <SlideProudect
        titel="skin-care"
        des="Discover our latest collection of mobile products"
        category="skin-care"
      />
        <SlideProudect
        titel="sunglasses"
        des="Discover our latest collection of mobile products"
        category="sunglasses"
      />
        <SlideProudect
        titel="tops"
        des="Discover our latest collection of mobile products"
        category="tops"
      />
        <SlideProudect
        titel="womens-jewellery"
        des="Discover our latest collection of mobile products"
        category="womens-jewellery"
      />
        <SlideProudect
        titel="beauty"
        des="Discover our latest collection of mobile products"
        category="beauty"
      />
       <SlideProudect
        titel="fragrances"
        des="Discover our latest collection of mobile products"
        category="fragrances"
      />
    </div>
  );
};

export default Home;
