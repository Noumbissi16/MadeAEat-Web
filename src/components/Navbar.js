import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <p className="mainTitle">MadeAEATS-Restaurant</p>
      <div className="nav-flex">
        <div className="name-icon-flex">
          <p>
            <span className="span">Bienvenue </span>
            Mr N Fast Food
          </p>
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
          <li>
            <NavLink
              className="NavLink"
              to="/"
              onClick={() => setShowLinks(false)}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className="NavLink"
              to="/nouveau-repas"
              onClick={() => setShowLinks(false)}
            >
              Ajouter
            </NavLink>
          </li>
          <li>
            <NavLink
              className="NavLink"
              to="/historique"
              onClick={() => setShowLinks(false)}
            >
              Historique
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/connexion">
              Deconnexion
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <button> */}

      {/* </button> */}
    </nav>
  );
}

export default Navbar;
