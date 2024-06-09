import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { withUnAuthRoutesBlock } from "../hoc/withUnAuthRoutesBlock";
import { AuthAPI } from "../api/auth-api";
import { addAdminInfoAction } from "../redux/Users/auth-slice";

function AdminInscription() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = async (e) => {
    seterrMsg("");
    setisLoading(true);
    e.preventDefault();
    try {
      const adminRestaurant = await AuthAPI.createAdmin(name, email, password);
      setisLoading(false);
      dispatch(addAdminInfoAction(adminRestaurant));
      // dispatch(loginAction());
      navigate("/restaurant-creation");
    } catch (error) {
      console.log("error create-restaurant ", error.response.data.msg);
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
        <h3 className="title margin-bottom">
          Inscrivez un administrateur de votre restaurant
        </h3>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-input"
            name="nom"
            id="nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ textTransform: isLoading ? "lowercase" : "capitalize" }}
        >
          {isLoading ? "...chargement" : "Inscription"}
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

export default AdminInscription;

export const UnProtAdminInscription = withUnAuthRoutesBlock(AdminInscription);
