import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Proudect = ({ product }) => {
  return (
    <div className='proudect'>

    <Link to={`/product/${product.id}`}>
    <div className='proudect_img'>
        <img src={product.thumbnail} alt='proudect' />
    </div>
      <p className='name_proudect'>{product.title}</p>
      <div className='Stars'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaRegStarHalfStroke />
      </div>
</Link>
        <p className='price'>{product.price}$</p>


        
        <div className='Icons_Proudect'>
<span><FaCartArrowDown/></span>

<span><FaRegHeart/></span>
<span><FaShare/></span>

        </div>
    </div>
  )
}

export default Proudect
