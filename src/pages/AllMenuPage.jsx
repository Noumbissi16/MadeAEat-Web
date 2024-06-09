import React, { useEffect, useState } from "react";
import RepasDetails from "../components/RepasDetails";
import { useNavigate } from "react-router-dom";
import "../utils/Styles/AllMenuPage.css";
import { withAuthRequired } from "../hoc/withAuthRequired";
import { useDispatch, useSelector } from "react-redux";
import AnnonceCard from "../components/AnnonceCard";
import { MenuApi } from "../api/menu-api";
import { getAllMenu } from "../redux/Restaurant/menu-slice";
import { AnnonceApi } from "../api/annonce-api";
import { addAnnonceAction } from "../redux/Restaurant/annonce-slice";

function AllMenuPage() {
  const [isFetching, setisFetching] = useState(true);
  const [errMsg, seterrMsg] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  async function fetchAllMenu() {
    try {
      const menus = await MenuApi.fetchAllMenuApi();
      const annonces = await AnnonceApi.getAllAnnonce();
      dispatch(addAnnonceAction(annonces.annonce));
      dispatch(getAllMenu(menus.menus));
    } catch (error) {
      console.log("error fetch all Menus", error);
    }
  }
  useEffect(() => {
    fetchAllMenu();
  }, []);

  const menuList = useSelector((state) => state.MENU.menus);
  const annonceList = useSelector((state) => state.ANNONCE.annonces);

  console.log("dd", annonceList);
  return (
    <>
      <div className="page-container">
        <p className="pageTitle">Vos Menu</p>
        <div className="menu-page-flex">
          <div className="menu-list">
            <div className="menu-flex">
              {menuList.map((menu) => (
                <RepasDetails
                  key={menu._id}
                  id={menu._id}
                  price={menu.price}
                  name={menu.name}
                  image={menu.imageMenu}
                  desc={menu.description}
                />
              ))}
            </div>
          </div>
          <div className="btn-list">
            <button
              onClick={() => navigation("parametre/menu/ajouter")}
              className=" btn-block btn"
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

        <div>
          <p className="pageTitle">Vos Annonce </p>
          <div className="annonceFlex">
            {annonceList.map((annonce) => (
              <AnnonceCard key={annonce._id} annonce={annonce} />
            ))}
          </div>

          <button
            className="btn btn-block"
            onClick={() => navigation("parametre/publier-annonce")}
          >
            Publier une nouvelle annonce
          </button>
        </div>
      </div>
    </>
  );
}

export default AllMenuPage;

export const ProtectedAllMenuPage = withAuthRequired(AllMenuPage);
