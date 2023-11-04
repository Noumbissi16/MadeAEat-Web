import React, { useRef, useState } from "react";
import s from "../utils/Styles/ModifyMenu.module.css";

function ModifyMenu() {
  const inputRef = useRef(null);

  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [image, setimage] = useState();
  const [price, setprice] = useState();

  const handleInputImgSelect = () => {
    inputRef.current.click();
  };

  const handleImgFile = (e) => {
    const selectImg = e.target.files[0];
    setimage(URL.createObjectURL(selectImg));
  };

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <h1>Modifier menu</h1>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="form-input"
        />
      </div>

      <div className={`form-row `}>
        <label onClick={handleInputImgSelect} className="form-label">
          Image
        </label>
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${image}) no-repeat center / cover`,
          }}
        />
        <input
          type="file"
          ref={inputRef}
          onChange={handleImgFile}
          style={{ display: "none" }}
          accept="image/*"
        />
        <button type="button" onClick={handleInputImgSelect} className="btn">
          Modifier
        </button>
      </div>
      <div className="form-row">
        <label htmlFor="desc" id="desc" className="form-label">
          Description
        </label>
        <textarea
          cols="30"
          rows="10"
          name="desc"
          id="desc"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="form-input"
        ></textarea>
      </div>

      <div className="form-row">
        <label htmlFor="price" id="price" className="form-label">
          Prix
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="form-input"
        />
      </div>

      <button type="submit" className="btn btn-block">
        Modifier
      </button>
    </form>
  );
}

export default ModifyMenu;
