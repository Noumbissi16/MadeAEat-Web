import React from "react";

import s from "../utils/Styles/Annonce.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AnnonceApi } from "../api/annonce-api";
import {
  deleteAnnonceAction,
  openAnnounceModal,
} from "../redux/Restaurant/annonce-slice";

function AnnonceCard({ annonce }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = annonce._id;

  async function onModify() {
    dispatch(openAnnounceModal());
    navigate(`modifier/${id}`);
  }

  async function onDelete() {
    try {
      await AnnonceApi.deleteAnnonceById(id);
      dispatch(deleteAnnonceAction(id));
    } catch (error) {
      console.log("error delete Annonce", error);
    }
  }
  return (
    <div className={s.card}>
      <h4 className={s.objet}>{annonce.title}</h4>

      <p className={s.contenu}>{annonce.description}</p>

      <button className={`btn btn-block ${s.marginBtn} `} onClick={onModify}>
        Modifier
      </button>
      <button className="btn btn-hipster btn-block" onClick={onDelete}>
        Supprimer
      </button>
    </div>
  );
}

export default AnnonceCard;
