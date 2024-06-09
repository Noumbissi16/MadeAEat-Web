import React, { useState } from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import s from "../../utils/Styles/Parametre/Annonce.module.css";
import { AnnonceApi } from "../../api/annonce-api";
import { useDispatch } from "react-redux";
import { addAnnonceAction } from "../../redux/Restaurant/annonce-slice";

function PublierAnnonce() {
  const dispatch = useDispatch();
  const [objet, setObjet] = useState("");
  const [contenu, setcontenu] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const annonce = { objet, contenu };
    try {
      const responseAnnonce = await AnnonceApi.createAnnonce(annonce);
      dispatch(addAnnonceAction(responseAnnonce));
    } catch (error) {
      console.log("Error create annonce ", error);
    }
  };
  return (
    <>
      <h4>Publier Annonce</h4>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className="form-row">
          <label htmlFor="objet" className="form-label">
            objet
          </label>
          <input
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
            type="text"
            className="form-input"
            name="objet"
            id="objet"
          />
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
            value={contenu}
            onChange={(e) => setcontenu(e.target.value)}
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
