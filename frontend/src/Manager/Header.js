import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Nav.css";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navid">
        <ul className="navitems">
          <li>
            <img id="logo" src={logo} alt="" />
          </li>
          <li>
            <NavLink to="/Main">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ManageUsers">user</NavLink>
          </li>
          <li>
            <NavLink to="/Dishes">Dish</NavLink>
          </li>
          <li>
            <NavLink to="/AddDish">Add Dish</NavLink>
          </li>
         
          <li>
            <NavLink to="/DeleteDish">Delete Dish</NavLink>
          </li>
          
          <li>
            <NavLink to="/Weather">Weather</NavLink>
          </li>
          <li>
            <NavLink to="/ManageRider">rider</NavLink>
          </li>
          <li>
            <NavLink to="/ViewFeedbacks">Feedback</NavLink>
          </li>
          
        </ul>
        {/* ------------------------------------------------------------------- */}
        {/* <div className="oo">
          <button className="accButt">User</button>
        </div> */}
        {/* ------------------------------------------ */}
      </div>
    </>
  );
};

export default Header;