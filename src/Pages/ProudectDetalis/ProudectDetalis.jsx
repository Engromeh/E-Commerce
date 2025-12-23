import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProudectDetalis.css'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';
import {    FaHeart  } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";


const ProudectDetalis = () => {
  const { id } = useParams();
  const [productsDetalis, setproductsDetalis] = useState(null);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setproductsDetalis(data);
        setLoading(false);
      });
  }, [id]);
  console.log(productsDetalis);


 if (loading) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}


  return (
    <div className='Proudect_Detalis'>
    <div className='container'>
    <div className='IteamImg_Detalis'>
<div className='MainImg'>

  <img src={productsDetalis.images[0]} alt={productsDetalis.title} />
</div>      
  <div className='SubImg'>
    {productsDetalis.images.map((img, index) => (
      <img key={index} src={img} alt={`${productsDetalis.title} ${index + 1}`} />
    ))}

  </div>

      </div>

      <div className='IteamDetalis'>
  <h1 className='name'>{productsDetalis.title}</h1>
      <div className='Stars'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaRegStarHalfStroke />
      </div>   
      
         <p className='price'>Price: ${productsDetalis.price}</p>
          <p className='description'>{productsDetalis.description}</p>
          <h5>Availability:<span>{productsDetalis.availabilityStatus}</span></h5>
                    <h5>Brand:<span>{productsDetalis.brand}</span></h5>
     <span> Hurry Up! Only {productsDetalis.stock} left in stock!</span>
  
<div className="actions">
  <button className="add-to-cart-btn">
    <p style={{fontSize:"13px" , color:"white" , fontWeight:"bold"}}>Add To Cart</p>
    <TiShoppingCart  className="cart-icon" />
  </button>

  <button className="wishlist-btn">
    <FaHeart />
  </button>
</div>


      </div>

 

     
      </div>
    </div>
  );
};

export default ProudectDetalis;
