import React from "react";
import { FaPlus } from "react-icons/fa";
import RepasDetails from "../components/RepasDetails";
import { Link, useNavigate } from "react-router-dom";
function AllMenuPage() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/nouveau-repas");
  };
  return (
    <div className="page-container">
      <div className="menu-flex">
        <div className="menu-list">
          <p className="pageTitle">Vos Menu</p>
          <RepasDetails />
          <RepasDetails />
          <RepasDetails />
        </div>
        <div className="btn-list">
          <button onClick={handleClick} className="btn addMenuBtn">
            Ajouter un repas <FaPlus />
          </button>
          <div className="card">
            <div className="card-content">
              <h5 className="card-titles">Repas le plus vendu :</h5>
              <p className="card-text-danger ">
                Riz Sauce Tomate : 25 Plats cette semaine
              </p>
            </div>
            <div className="card-content">
              <h5 className="card-titles">Repas le moins vendu :</h5>
              <p className="card-text-primary ">
                Riz Sauce Tomate : 25 Plats cette semaine
              </p>
            </div>
            <button className="btn" onClick={() => navigation("/historique")}>
              Details
            </button>
            {/* <Link className="Link">Details</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMenuPage;
