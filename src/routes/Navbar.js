import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { MdOutlineCancel } from "react-icons/md";
import "../utils/Styles/Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-flex">
        <div className="name-icon-flex">
          <p className="mainTitle">MadeA EAT-Restaurant</p>

          <div>
            {showLinks ? (
              <MdOutlineCancel
                className="nav-icons"
                onClick={() => setShowLinks(!showLinks)}
              />
            ) : (
              <FaBars
                onClick={() => setShowLinks(!showLinks)}
                className="nav-icons"
              />
            )}
          </div>
        </div>
        <ul className={showLinks ? "link-flex-display" : "link-flex"}>
          <li className="linkMargin">
            <NavLink
              className="NavLink"
              to="/"
              onClick={() => setShowLinks(false)}
            >
              Vos publications
            </NavLink>
          </li>
          <li className="linkMargin">
            <NavLink
              className="NavLink"
              to="/historique/commande"
              onClick={() => setShowLinks(false)}
            >
              Historique
            </NavLink>
          </li>
          <li className="linkMargin">
            <NavLink
              className="NavLink"
              to="/parametre/menu/ajouter"
              onClick={() => setShowLinks(false)}
            >
              Parametre
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
