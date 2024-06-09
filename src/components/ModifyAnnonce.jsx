import React, { useState } from "react";
import s from "../utils/Styles/ModifyMenu.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnnonceApi } from "../api/annonce-api";
import {
  closeAnnounceModal,
  modifyAnnonce,
} from "../redux/Restaurant/annonce-slice";

function ModifyAnnonce() {
  let { id } = useParams();
  const foundAnnonce = useSelector((state) =>
    state.RESTAURANT.annonce.find((annonce) => annonce._id === id)
  );

  const [object, setobject] = useState(foundAnnonce.title);
  const [content, setcontent] = useState(foundAnnonce.description);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const annulateBtn = () => {
    dispatch(closeAnnounceModal());
    navigate("/");
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const annonce = { object, content };
    try {
      const updatedAnnonce = await AnnonceApi.updateAnnonceById(id, annonce);
      dispatch(modifyAnnonce(updatedAnnonce));
      dispatch(closeAnnounceModal());
      navigate("/");
    } catch (error) {
      console.log("error updating annonce ", error);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <h1>Modifier Annonce</h1>
      <div className="form-row">
        <label htmlFor="object" className="form-label">
          Objet
        </label>
        <input
          type="text"
          name="object"
          id="object"
          value={object}
          onChange={(e) => setobject(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <label htmlFor="desc" id="desc" className="form-label">
          Contenu
        </label>
        <textarea
          name="desc"
          id="desc"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          className="form-input"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-block">
        Modifier
      </button>
      <button
        type="button"
        className="btn-block"
        style={{
          marginTop: 10,
          background: "none",
          color: "black",
          border: "1px solid black",
          padding: "0.25rem",
          fontSize: 12,
          cursor: "pointer",
        }}
        onClick={annulateBtn}
      >
        Annuler
      </button>
    </form>
  );
}

export default ModifyAnnonce;
