import React, { useState } from "react";
import "./Navbar.css";
const NavBar = ({ filterBySearch, al }) => {
  const openNav = () => {
    document.querySelector(".navbar").classList.toggle("active");
  };

  const [searchVal, setSearchVal] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchVal);
    setSearchVal("");
  };

  // filterBySearch(searchVal);
  const handelSearch = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    al(val);
  };

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="logo">
          <a href="#">مطعم جديد</a>
        </div>
        <form>
          <input
            type="text"
            placeholder="ابحث"
            onChange={handelSearch}
            value={searchVal}
          />
          <button onClick={onSearch} className="search-btn">
            ابحث
          </button>
        </form>
      </div>
      <div className="menu-icon" onClick={openNav}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default NavBar;
