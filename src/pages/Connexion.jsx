import React from "react";
import {
  Link,
  // useNavigate
} from "react-router-dom";
import "../utils/Styles/Inscription.css";
// import { useDispatch } from "react-redux";
// import {
//   addAdminInfoAction,
//   loginAction,
// } from "../redux/Restaurant/restaurant-slice";
import { withUnAuthRoutesBlock } from "../hoc/withUnAuthRoutesBlock";

function Connexion() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    alert("Please first create an account");
    // dispatch(addAdminInfoAction());
    // dispatch(loginAction());
    // navigate("/");
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2>Application des Restaurants</h2>
      </div>
      <form className="form" onSubmit={handleForm}>
        <h4 className="title">Connectez-vous a votre compte Restaurateur </h4>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom Utilisateur
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="nom-restaurant" className="form-label">
            Nom restaurant
          </label>
          <input
            type="text"
            className="form-input"
            name="nom-restaurant"
            id="nom-restaurant"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-block ">
          Connexion
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/restaurant-creation">
            Creer un compte pour votre restaurant{" "}
          </Link>
          <div className="underline" />
        </div>
      </form>
    </div>
  );
}

export default Connexion;

export const UnProtConnexion = withUnAuthRoutesBlock(Connexion);
