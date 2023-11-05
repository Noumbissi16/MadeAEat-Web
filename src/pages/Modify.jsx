import React from "react";
import "../utils/Styles/AllMenuPage.css";
import ModifyAnnonce from "../components/ModifyAnnonce";
import { useSelector } from "react-redux";
import ModifyMenu from "../components/ModifyMenu";

const Modify = () => {
  const menuModalState = useSelector((state) => state.RESTAURANT.menuModal);
  const annonceModalState = useSelector(
    (state) => state.RESTAURANT.annonceModal
  );
  return (
    <>
      {annonceModalState ? (
        <div className="modalWrapper">
          <ModifyAnnonce />
        </div>
      ) : (
        <></>
      )}
      {menuModalState ? (
        <div className="modalWrapper">
          <ModifyMenu />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modify;
