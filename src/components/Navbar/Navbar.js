import React from "react";

///////////////////Routing
import { NavLink } from "react-router-dom";
///////////////////Context
import { useAuth } from "../../AppContext/AuthContext";

/////////////////////////STYLES
import "./styles.scss";

export const Navbar = () => {
  const isAuthorized = useAuth();
  // console.log("isAuthorized", isAuthorized);
  if (!isAuthorized.token) return null;

  return (
    <div className="navbar">
      <div className="navbar__logo">Navigation Bar</div>
      <div className="navbar__items">
        <div className="navbar__item">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="navbar__item">
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </div>
    </div>
  );
};
