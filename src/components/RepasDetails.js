import React from "react";
import s from "../utils/Styles/RepasDetails.module.css";
import { useNavigate } from "react-router-dom";
import DefaultProfil from "../utils/images/DefaultProfil.jpg";

function RepasDetails({ price, name, desc, image, id }) {
  const navigation = useNavigate();

  const onModify = () => {
    navigation(`parametre/menu/modifier/${id}`);
  };

  const onDelete = () => {
    alert("clicked");
  };

  console.log(image);
  return (
    <div className={s.repas_details}>
      {image ? (
        <div
          className={s.thumbnail}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${image}) no-repeat center / cover`,
          }}
        />
      ) : (
        <div
          className={s.thumbnail}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${DefaultProfil}) no-repeat center / cover`,
          }}
        />
      )}
      <div className={s.col_menu}>
        <h3 className={s.col_name}>{name}</h3>
        <h4 className={` ${s.price}`}>{price}F Cfa</h4>
        <p className={` ${s.menu_desc}`}>{desc}</p>
        <div className={s.btn_flex}>
          <button className={`btn  ${s.marginBtn}`} onClick={onModify}>
            Modifier
          </button>
          <button className="btn  btn-hipster" onClick={onDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default RepasDetails;
