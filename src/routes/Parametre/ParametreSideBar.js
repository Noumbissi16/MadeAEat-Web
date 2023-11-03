import React from "react";
import { NavLink } from "react-router-dom";
import admin from "../../utils/images/administrateur.png";
import annonce from "../../utils/images/annonce.png";
import menu from "../../utils/images/menu.png";
import restaurant from "../../utils/images/restaurant.png";
import "../../utils/Styles/Parametre/ParametreSideBar.css";

function ParametreSideBar() {
  return (
    <div className="sideBarContainer">
      <NavLink to="profile-restaurant" className="link">
        <img alt="profile-restaurant" src={restaurant} className="icons" />
        <p>Profile Restaurant</p>
      </NavLink>
      <NavLink to="profile-administrateur" className="link">
        <img alt="profile-administrateur" src={admin} className="icons" />
        <p>Profile administrateur</p>
      </NavLink>
      <NavLink to={`menu/ajouter`} className="link">
        <img alt="ajouter-menu" src={menu} className="icons" />
        <p>Menu</p>
      </NavLink>
      <NavLink to="publier-annonce" className="link">
        <img alt="publier-annonce" src={annonce} className="icons" />
        <p>Publier Annonce</p>
      </NavLink>
    </div>
  );
}

export default ParametreSideBar;
