import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProudectDetalis.css";

import SlideProudect from "../../Components/SlideProudect/SlideProudect";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import ProudectDetalis_Image from "./ProudectDetalis_Image";
import ProudectDetalis_text from "./ProudectDetalis_text";

const ProudectDetalis = () => {
  const { addcartitem, cartitems } = useContext(CartContext);
  const { id } = useParams();

  const [productsDetalis, setproductsDetalis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");

  const isInCart =
    productsDetalis && cartitems.some((item) => item.id === productsDetalis.id);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setproductsDetalis(data);
        setMainImg(data.images[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      {/* Product Details */}
      <div className="Proudect_Detalis">
        <div className="container">
          {/* Images Section */}

          <ProudectDetalis_Image
            productsDetalis={productsDetalis}
            mainImg={mainImg}
            setMainImg={setMainImg}
          />
          {/* Product Info */}
          <ProudectDetalis_text
            productsDetalis={productsDetalis}
            isInCart={isInCart}
            addcartitem={addcartitem}
          />
        </div>
      </div>

      {/* Related Products Slider */}
      <SlideProudect
        titel={productsDetalis.category}
        category={productsDetalis.category}
        currentId={productsDetalis.id}
      />
    </>
  );
};

export default ProudectDetalis;
