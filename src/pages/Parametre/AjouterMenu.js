import React, { useEffect, useRef, useState } from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import DefaultProfil from "../../utils/images/DefaultProfil.jpg";

import s from "../../utils/Styles/Parametre/AjouterMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuAction,
  modifyMenu,
} from "../../redux/Restaurant/restaurant-slice";
import { useNavigate, useParams } from "react-router-dom";

function AjouterMenu() {
  let { id } = useParams();
  const foundMenu = useSelector((state) =>
    state.RESTAURANT.menus.find((menu) => menu.id === id)
  );

  useEffect(() => {
    if (!id) {
      setmenu((prev) => ({
        desc: "",
        name: "",
        price: "",
      }));
    }
  }, [id]);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(modifyMenu({ id, menu }));
    } else {
      dispatch(addMenuAction(menu));
    }
    navigation("/");
  };

  const [menu, setmenu] = useState({
    name: foundMenu ? foundMenu.name : "",
    price: foundMenu ? foundMenu.price : "",
    desc: foundMenu ? foundMenu.desc : "",
    image: foundMenu ? foundMenu.image : "",
  });

  const handleInput = (e) => {
    switch (e.target.name) {
      case "name":
        setmenu((prev) => ({
          ...prev,
          name: e.target.value,
        }));
        break;
      case "price":
        setmenu((prev) => ({
          ...prev,
          price: e.target.value,
        }));
        break;
      case "desc":
        setmenu((prev) => ({
          ...prev,
          desc: e.target.value,
        }));
        break;

      default:
        break;
    }
  };

  const inputImgRef = useRef(null);

  const handleImgSelect = () => {
    inputImgRef.current.click();
  };

  const handleInputImg = (e) => {
    const img = e.target.files[0];
    setmenu((prev) => ({
      ...prev,
      image: URL.createObjectURL(img),
    }));
  };

  return (
    <>
      {id ? <h4>Modifier Menu</h4> : <h4> Ajouter Menu</h4>}
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={`form-row`}>
          <p>Repas</p>
          <div>
            <div className={s.imgContainer}>
              {menu.image ? (
                <img
                  alt="logo restaurant"
                  src={menu.image}
                  className={s.userImg}
                />
              ) : (
                <img
                  alt="logo restaurant"
                  src={DefaultProfil}
                  className={s.userImg}
                />
              )}
              <button
                className={`btn ${s.btnPosition}`}
                type="button"
                onClick={handleImgSelect}
              >
                Ajouter
              </button>
              <input
                type="file"
                ref={inputImgRef}
                style={{ display: "none" }}
                onChange={handleInputImg}
                accept="image/*"
              />
            </div>

            <div>
              <div className="form-row">
                <label htmlFor="name" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="name"
                  value={menu.name}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="form-row">
                <label htmlFor="price" className="form-label">
                  prix
                </label>
                <input
                  type="number"
                  className="form-input"
                  name="price"
                  id="price"
                  value={menu.price}
                  onChange={(e) => handleInput(e)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <textarea
                  cols="30"
                  className="form-input"
                  name="desc"
                  id="desc"
                  rows="5"
                  value={menu.desc}
                  onChange={(e) => handleInput(e)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-block" type="submit">
          {id ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </>
  );
}

export default AjouterMenu;

export const ProtectedAjouterMenu = withAuthRequired(AjouterMenu);
