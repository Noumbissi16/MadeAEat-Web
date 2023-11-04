import React from "react";
import s from "../utils/Styles/ModifyMenu.module.css";

function ModifyAnnonce() {
  const [object, setobject] = useState();
  const [content, setcontent] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();
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
          cols="30"
          rows="10"
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
