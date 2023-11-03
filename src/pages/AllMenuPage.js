import React from "react";
import RepasDetails from "../components/RepasDetails";
import { useNavigate } from "react-router-dom";
import "../utils/Styles/AllMenuPage.css";
import { withAuthRequired } from "../hoc/withAuthRequired";
import { useSelector } from "react-redux";

function AllMenuPage() {
  const navigation = useNavigate();
  const menuList = useSelector((state) => state.RESTAURANT.menus);

  return (
    <div className="page-container">
      <div className="menu-page-flex">
        <div className="menu-list">
          <p className="pageTitle">Vos Menu</p>
          <div className="menu-flex">
            {menuList.map((menu) => (
              <RepasDetails
                key={menu.id}
                id={menu.id}
                price={menu.price}
                name={menu.name}
                image={menu.image}
                desc={menu.desc}
              />
            ))}
          </div>
        </div>
        <div className="btn-list">
          <button
            onClick={() => navigation("parametre/menu/ajouter")}
            className=" addMenuBtn btn"
          >
            Ajouter un repas
          </button>
          <div className="card">
            <div style={{ margin: 10 }}>
              <div className="card-content">
                <h5 className="card-titles">Repas le plus vendu :</h5>
                <p className="card-text-primary ">
                  Riz Sauce Tomate : 25 Plats cette semaine
                </p>
              </div>
              <div className="card-content">
                <h5 className="card-titles">Repas le moins vendu :</h5>
                <p className="card-text-danger ">
                  Riz Sauce Tomate : 25 Plats cette semaine
                </p>
              </div>
            </div>
            <button
              className=" addMenuBtn btn"
              onClick={() => navigation("/historique/menu")}
              style={{ marginBottom: 0 }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMenuPage;

export const ProtectedAllMenuPage = withAuthRequired(AllMenuPage);
