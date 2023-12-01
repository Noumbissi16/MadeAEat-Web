import React from "react";
import ParametreSideBar from "../../routes/Parametre/ParametreSideBar";
import { Outlet } from "react-router-dom";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import "../../utils/Styles/Parametre/Parametre.css";
import DefaultProfil from "../../utils/images/DefaultProfil.jpg";
import { useSelector } from "react-redux";

function Parametre() {
  const adminInfo = useSelector((state) => state.RESTAURANT.adminInfo);

  const restaurantInfo = useSelector(
    (state) => state.RESTAURANT.restaurantInfo
  );

  return (
    <div className="page-container">
      <div className="settingsTop">
        <div className="user">
          {restaurantInfo.image ? (
            <img
              alt="logo restaurant"
              src={restaurantInfo.image}
              className="userProfile"
            />
          ) : (
            <img
              alt="logo restaurant"
              src={DefaultProfil}
              className="userProfile"
            />
          )}
          <div>
            <h3 className="userName">
              {restaurantInfo?.name ? restaurantInfo.name : "Nom restaurant"}
              {adminInfo.name
                ? ` ( ${adminInfo.name} )`
                : "(Nom administrateur)"}
            </h3>
            <p className="userDesc">Votre restaurant ( Administrateur )</p>
          </div>
        </div>
        <div className="status">
          <p>Statut Actuel</p>
          <select id="statut-restaurant">
            <option value="fermez" key="">
              fermer
            </option>
            <option value="ouvert" key="">
              ouvert
            </option>
          </select>
        </div>
      </div>
      <div className="settingsFlex">
        <div className="sideBar">
          <ParametreSideBar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Parametre;

export const ProtectedParametre = withAuthRequired(Parametre);
