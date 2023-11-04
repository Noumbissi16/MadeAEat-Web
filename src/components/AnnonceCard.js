import React from "react";

import s from "../utils/Styles/Annonce.module.css";

function AnnonceCard() {
  return (
    <div className={s.card}>
      <h4 className={s.objet}>Nouveau repas en vente</h4>

      <p className={s.contenu}>
        Votre riz sauter desormais disponible: beaucoup de chose a decouvrir
      </p>

      <button className={`btn btn-block ${s.marginBtn} `}>Modifier</button>
      <button className="btn btn-hipster btn-block">Supprimer</button>
    </div>
  );
}

export default AnnonceCard;
