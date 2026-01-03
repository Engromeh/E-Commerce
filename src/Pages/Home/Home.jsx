import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import "./Home.css";
import SlideProudect from "../../Components/SlideProudect/SlideProudect";
import PageTransation from "../../Components/Other_Style/PageTransation";
const Home = () => {

  return (
    <PageTransation>
        <div>
      <HeroSlider />

      <SlideProudect
        titel="Mobile"
        des="Discover our latest collection of mobile products"
        category="smartphones"
      />

      <SlideProudect
        titel="Laptob"
        des="Discover our latest collection of mobile products"
        category="laptops"
      />

      <SlideProudect
        titel="Mobile-Accessories"
        des="Discover our latest collection of mobile products"
        category="mobile-accessories"
      />

      <SlideProudect
        titel="Sports-Accessories"
        des="Discover our latest collection of mobile products"
        category="sports-accessories"
      />
        <SlideProudect
        titel="Skin-Care"
        des="Discover our latest collection of mobile products"
        category="skin-care"
      />
        <SlideProudect
        titel="Sunglasses"
        des="Discover our latest collection of mobile products"
        category="sunglasses"
      />
        <SlideProudect
        titel="Tops"
        des="Discover our latest collection of mobile products"
        category="tops"
      />
        <SlideProudect
        titel="Womens-Jewellery"
        des="Discover our latest collection of mobile products"
        category="womens-jewellery"
      />
        <SlideProudect
        titel="Beauty"
        des="Discover our latest collection of mobile products"
        category="beauty"
      />
       <SlideProudect
        titel="Fragrances"
        des="Discover our latest collection of mobile products"
        category="fragrances"
      />
    </div>
    </PageTransation>
  
  );
};

export default Home;
