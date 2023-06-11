import React from "react";
import Poisson from "../utils/images/poisson braiser.jpg";

function RepasDetails() {
  return (
    <div className="repas-details">
      <img src={Poisson} className=" img-poisson" alt="poisson braiser" />

      <div className="col-menu">
        <div>
          <h3 className=" menu-margin">Poisson Braisser</h3>
          <h4 className=" menu-margin">2500F Cfa</h4>
          <p className="menu-margin menu-desc">
            Tibelt preskapet. Laheten parkera bussen.Vilijynera kor. Mydat. Ron
            kvasityp relogi.Decin dossade.
          </p>
        </div>
        <div className="btn-flex">
          <button style={{ marginRight: 15 }} className="btn btn-hipster">
            Supprimer
          </button>
          <button className="btn">Modifier</button>
        </div>
      </div>
    </div>
  );
}

export default RepasDetails;
