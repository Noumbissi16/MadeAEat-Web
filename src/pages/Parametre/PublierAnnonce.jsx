import React from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import s from "../../utils/Styles/Parametre/Annonce.module.css";

function PublierAnnonce() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h4>Publier Annonce</h4>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className="form-row">
          <label htmlFor="objet" className="form-label">
            objet
          </label>
          <input type="text" className="form-input" name="objet" id="objet" />
        </div>

        <div className="form-row">
          <label htmlFor="content" className="form-label">
            Contenu <span>100 mots</span>
          </label>
          <textarea
            cols="20"
            className="form-input"
            name="content"
            id="content"
            rows="5"
            maxLength={100}
          ></textarea>
        </div>

        <button className="btn btn-block" type="submit">
          Valider
        </button>
      </form>
    </>
  );
}

export default PublierAnnonce;

export const ProtectedPublierAnnonce = withAuthRequired(PublierAnnonce);
