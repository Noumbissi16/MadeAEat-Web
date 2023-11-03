import React from "react";
import HistoriqueNavbar from "../../routes/Historique/HistoriqueNavbar";
import { Outlet } from "react-router-dom";
import { withAuthRequired } from "../../hoc/withAuthRequired";

function Historique() {
  return (
    <div className="page-container">
      <HistoriqueNavbar />
      <Outlet />
    </div>
  );
}

export default Historique;
export const ProtectedHistorique = withAuthRequired(Historique);
