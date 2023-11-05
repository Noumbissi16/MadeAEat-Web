import React from "react";
import { useState } from "react";

function NouveauRepasForm() {
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    console.log(image);
    event.preventDefault();
  };
  return (
    <div className="page-container">
      <h4 className="pageTitle title">Nouveau Repas</h4>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            onChange={(e) => setNom(e.target.value)}
            type="text"
            id="nom"
            name="nom"
            className="form-input"
            required
            value={nom}
          />
        </div>
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="file"
            id="image"
            name="image"
            className="form-input"
            required
            value={image}
          />
        </div>
        <div className="form-row">
          <label htmlFor="prix" className="form-label">
            prix
          </label>
          <input
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            placeholder="2500F Cfa"
            type="number"
            id="prix"
            name="prix"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="form-textarea"
          />
        </div>
        <button className="btn btn-block"> Ajouter</button>
      </form>
    </div>
  );
}

export default NouveauRepasForm;
