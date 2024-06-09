import React, { useState } from "react";
import {
  Link,
  // useNavigate
} from "react-router-dom";
import "../utils/Styles/Inscription.css";
import { useDispatch } from "react-redux";
import { withUnAuthRoutesBlock } from "../hoc/withUnAuthRoutesBlock";
import { AuthAPI } from "../api/auth-api";

function Connexion() {
  const [email, setemail] = useState();
  const [nomRestaurant, setnomRestaurant] = useState();
  const [password, setpassword] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleForm = async (e) => {
    seterrMsg("");
    setisLoading(true);
    e.preventDefault();
    try {
      await AuthAPI.signin(email, nomRestaurant, password);
      // dispatch()
      setisLoading(false);
    } catch (error) {
      console.log("Error connexion of restaurant ", error.response.data);
      seterrMsg(error.response.data.msg);
      setisLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2
          style={{
            marginTop: "-15px",
          }}
        >
          Application des Restaurants
        </h2>
      </div>
      <p className="err-msg">{errMsg}</p>
      <form className="form" onSubmit={handleForm}>
        <h4 className="title">Connectez-vous a votre compte Restaurateur </h4>
        <div className="form-row">
          <label htmlFor="email-admin" className="form-label">
            Email Admin
          </label>
          <input
            type="email"
            className="form-input"
            name="email-admin"
            id="email-admin"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            value={nomRestaurant}
            onChange={(e) => setnomRestaurant(e.target.value)}
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block ">
          Connexion
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/admin-creation">
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
