import React from "react";

import s from "../utils/Styles/Annonce.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openAnnounceModal } from "../redux/Restaurant/restaurant-slice";

function AnnonceCard({ annonce }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onModify() {
    dispatch(openAnnounceModal());
    navigate(`modifier/${annonce.id}`);
  }
  return (
    <div className={s.card}>
      <h4 className={s.objet}>{annonce.objet}</h4>

      <p className={s.contenu}>{annonce.contenu}</p>

      <button className={`btn btn-block ${s.marginBtn} `} onClick={onModify}>
        Modifier
      </button>
      <button className="btn btn-hipster btn-block">Supprimer</button>
    </div>
  );
}

export default AnnonceCard;
