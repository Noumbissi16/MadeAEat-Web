import React, { useState } from "react";
import s from "../utils/Styles/ModifyMenu.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifyAnnonce } from "../redux/Restaurant/restaurant-slice";

function ModifyAnnonce() {
  let { id } = useParams();
  const foundAnnonce = useSelector((state) =>
    state.RESTAURANT.annonce.find((annonce) => annonce.id === Number(id))
  );

  const [object, setobject] = useState(foundAnnonce.objet);
  const [content, setcontent] = useState(foundAnnonce.contenu);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(
      modifyAnnonce({ objet: object, contenu: content, id: Number(id) })
    );
    navigate("/");
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
    </form>
  );
}

export default ModifyAnnonce;
