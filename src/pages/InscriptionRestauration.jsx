import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { withUnAuthRoutesBlock } from "../hoc/withUnAuthRoutesBlock";
import { AuthAPI } from "../api/auth-api";
import { addRestaurantInfoAction } from "../redux/Users/auth-slice";
function InscriptionRestauration() {
  const [name, setname] = useState();
  const [town, settown] = useState("Bafoussam");
  const [location, setlocation] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    setisLoading(true);
    seterrMsg("");
    e.preventDefault();
    try {
      const restaurant = await AuthAPI.createRestaurant(name, town, location);
      setisLoading(false);
      dispatch(addRestaurantInfoAction(restaurant));
      navigate("/");
    } catch (error) {
      console.log("error create-restaurant", error.response.data);
      seterrMsg(error.response.data.msg);
    }
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2>Application des Restaurants</h2>
      </div>
      <form className="form" onSubmit={handleForm}>
        <h3 className="title margin-bottom">Inscrivez votre restaurant</h3>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom du restaurant
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="localisation" className="form-label">
            Localisation du restaurant
          </label>
          <select
            id="localisation"
            required
            className="dropdown"
            value={town}
            onChange={(e) => settown(e.target.value)}
          >
            <option value="Bafoussam">Bafoussam</option>
            <option value="Douala">Douala</option>
            <option value="Yaounde">Yaounde</option>
            <option value="Sangmelima">Sangmelima</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            localisation du restaurant dans la ville
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            required
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ textTransform: "lowercase" }}
        >
          {isLoading ? "...chargement" : "Ajouter"}
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/connexion">
            Se connecter a votre compte
          </Link>
          <div className="underline" />
        </div>
      </form>
    </div>
  );
}

export default InscriptionRestauration;

export const UnProtectedInscription = withUnAuthRoutesBlock(
  InscriptionRestauration
);
