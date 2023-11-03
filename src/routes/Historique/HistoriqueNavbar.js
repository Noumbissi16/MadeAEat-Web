import React from "react";
import { NavLink } from "react-router-dom";
import "../../utils/Styles/HistoriqueNavbar.css";

function HistoriqueNavb() {
  return (
    <div className="panelNavbar">
      <h1 className="tableau-de-bord">Tableau de bord</h1>
      <div className="leftFlex">
        <div className="linkHistFlex">
          <NavLink to="commande" className="panelLinks">
            Commande
          </NavLink>
          <NavLink to="menu" className="panelLinks">
            Menu
          </NavLink>
        </div>
        <div>
          <select name="temps" id="temps">
            <option value="Mois">Mois</option>
            <option value="Semaine">Semaine</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HistoriqueNavb;
