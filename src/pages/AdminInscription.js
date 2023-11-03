import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addAdminInfoAction } from "../redux/Restaurant/restaurant-slice";
import { useState } from "react";

function AdminInscription() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addAdminInfoAction({ name, email, password }));
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <h1>MadeAEATS</h1>
        <h2>Application des Restaurants</h2>
      </div>
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
        <button type="submit" className="btn btn-block">
          Inscription
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
