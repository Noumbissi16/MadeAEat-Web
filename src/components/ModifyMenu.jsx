import React, { useRef, useState } from "react";
import s from "../utils/Styles/ModifyMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMenuModal,
  modifyMenu,
} from "../redux/Restaurant/restaurant-slice";
import { useNavigate, useParams } from "react-router-dom";

function ModifyMenu() {
  let { id } = useParams();

  const foundMenu = useSelector((state) =>
    state.RESTAURANT.menus.find((menu) => menu.id === Number(id))
  );

  // console.log(foundMenu);
  const inputRef = useRef(null);

  const [name, setname] = useState(foundMenu.name);
  const [description, setdescription] = useState(foundMenu.desc);
  const [image, setimage] = useState(foundMenu.image);
  const [price, setprice] = useState(foundMenu.price);

  const handleInputImgSelect = () => {
    inputRef.current.click();
  };

  const handleImgFile = (e) => {
    const selectImg = e.target.files[0];
    setimage(URL.createObjectURL(selectImg));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(closeMenuModal());
    const menu = { name, price, desc: description, image, id: Number(id) };
    dispatch(modifyMenu(menu));
    navigate("/");
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
          type="tel"
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
