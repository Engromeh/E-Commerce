import { Route, Routes } from "react-router-dom";
import BtnHeader from "./Components/Header/BtnHeader";
import TopHeader from "./Components/Header/TopHeader";
import Home from "./Pages/Home/Home";
import ProudectDetalis from "./Pages/ProudectDetalis/ProudectDetalis";
import Cart from "./Pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScorllTop from "./Components/Other_Style/ScorllTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Favlist from "./Components/Favlist/Favlist";
import Contact from "./Pages/OtherPages/Contact";
import AboutUs from "./Pages/OtherPages/Aboutus";
import Blog from "./Pages/OtherPages/Blog";
import Accessories from "./Pages/OtherPages/Accessories";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtnHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "15px",
          },
        }}
      />
      <ScorllTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProudectDetalis />} />
          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/Favlist" element={<Favlist />} />
            <Route path="/contact" element={<Contact />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/blog" element={<Blog />} />
    <Route path="/accessories" element={<Accessories />} />


        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
