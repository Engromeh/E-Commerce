import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdExitToApp } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

const BtnHeader = () => {
  const location = useLocation();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  
  useEffect(() => {
  
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="Btn_header">
      {/* Dropdown Button */}
      <div
        className="dropdown_container"
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoMenuSharp className="menu_icon" />
        <p style={{ color: "white" }}>Browse category</p>
        <TiArrowSortedDown
          className={`arrow ${open ? "rotate" : ""}`}
          style={{ fill: "white" }}
        />
      </div>

      {/* Dropdown Menu */}
      <div className={`Nav_links ${open ? "show" : ""}`}>
        {category.map((item) => (
          <Link
            key={item.slug}
            to={`/category/${item.slug}`}
            className="nav_link"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Header Links */}
      <div className="Btn_header_link">
        <Link to="/" className="nav-linkPage">
          Home
        </Link>
        <Link to="/about-us" className="nav-linkPage">
          About Us
        </Link>
        {/* <Link to="/accessories" className="nav-linkPage">
          Accessories
        </Link> */}
        <Link to="/blog" className="nav-linkPage">
          Blog
        </Link>
        <Link to="/contact" className="nav-linkPage">
          Contact
        </Link>
      </div>

      {/* Icons */}
      <div className="btnheader_icon">
        <div className="icon">
          <MdExitToApp />
        </div>
        <div className="icon">
          <IoPersonAdd />
        </div>
      </div>
    </div>
  );
};

export default BtnHeader;
