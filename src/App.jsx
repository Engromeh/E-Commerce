import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";



import Home from "./Pages/Home/Home";
import ProudectDetalis from "./Pages/ProudectDetalis/ProudectDetalis";
import Cart from "./Pages/Cart/Cart";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Favlist from "./Components/Favlist/Favlist";
import Contact from "./Pages/OtherPages/Contact";
import AboutUs from "./Pages/OtherPages/Aboutus";
import Blog from "./Pages/OtherPages/Blog";
import Accessories from "./Pages/OtherPages/Accessories";

import MainLayout from "./Layout/MainLayout ";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";

function App() {
  return (
    <>
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

      <AnimatePresence mode="wait">
        <Routes>


          

          {/* Main website (WITH HEADER) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProudectDetalis />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/favlist" element={<Favlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            <Route path="/accessories" element={<Accessories />} />
          </Route>

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
