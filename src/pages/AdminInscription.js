import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminInscription() {
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
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
        <button type="submit" className="btn btn-block">
          Inscription
        </button>
        <div className="underline-flex">
          <Link className="Link" to="/connexion">
            {" "}
            Se connecter a votre compte
          </Link>
          <div className="underline" />
        </div>
      </form>
    </div>
  );
}

export default AdminInscription;
