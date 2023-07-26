import constants from "./constants";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import image from "./icon.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" src={image} alt="MovieDB" />
        </Link>
        <Link to={constants.POPULAR_MOVIES_ROUTE} className="link">
          <span>Popular</span>
        </Link>
        <Link to={constants.TOP_RATED_MOVIES_ROUTE} className="link">
          <span>Top Rated</span>
        </Link>
        <Link to={constants.UPCOMING_MOVIES_ROUTE} className="link">
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
