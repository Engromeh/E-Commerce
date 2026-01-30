import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProudectDetalis.css";

import SlideProudect from "../../Components/SlideProudect/SlideProudect";
import { CartContext } from "../../Components/CartProvider/CartProvider";
import ProudectDetalis_Image from "./ProudectDetalis_Image";
import ProudectDetalis_text from "./ProudectDetalis_text";
import PageTransation from "../../Components/Other_Style/PageTransation";

const ProudectDetalis = () => {
  const { addcartitem, cartitems, favitems, addFavitem, removeFavitem } =
    useContext(CartContext);

  const { id } = useParams();

  const [productsDetalis, setproductsDetalis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState("");

  const isInCart =
    productsDetalis && cartitems.some((item) => item.id === productsDetalis.id);

  const isInFav =
    productsDetalis && favitems.some((item) => item.id === productsDetalis.id);

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
    <PageTransation key={id}>
      <div className="Proudect_Detalis">
        <div className="container">
          <ProudectDetalis_Image
            productsDetalis={productsDetalis}
            mainImg={mainImg}
            setMainImg={setMainImg}
          />

          <ProudectDetalis_text
            productsDetalis={productsDetalis}
            isInCart={isInCart}
            addcartitem={addcartitem}
            isInFav={isInFav}
            addFavitem={addFavitem}
            removeFavitem={removeFavitem}
          />
        </div>
      </div>

      <SlideProudect
        titel={productsDetalis.category}
        category={productsDetalis.category}
        currentId={productsDetalis.id}
      />
    </PageTransation>
  );
};

export default ProudectDetalis;
