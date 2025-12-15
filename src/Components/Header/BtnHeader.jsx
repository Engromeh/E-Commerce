import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdExitToApp } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

const BtnHeader = () => {
  const [open , setopen]=useState(false)
  return (
    <div className='Btn_header'>

       <div className="dropdown_container">
      <button
        className="category_btn"
        onClick={() => setopen(!open)}
      >
        Categories ▾
      </button>

      {open && (
        <div className="dropdown_menu">
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home &amp; Garden</li>
            <li>Sports</li>
            <li>Toys</li>
          </ul>
        </div>
      )}
    </div>

          <div className="Btn_header_link">
  <Link to="/deals" className="nav_link">Home</Link>
  <Link to="/about" className="nav_link">About Us</Link>
  <Link to="/accessories" className="nav_link">Accessories</Link>
  <Link to="/blog" className="nav_link">Blog</Link>
  <Link to="/contact" className="nav_link">Contact</Link>
</div>


 <div className="btnheader_icon">
        <div className="icon">
<MdExitToApp />


        </div>
          <div className="icon">
<IoPersonAdd />


        </div>

        </div>

    </div>
  )
}

export default BtnHeader
