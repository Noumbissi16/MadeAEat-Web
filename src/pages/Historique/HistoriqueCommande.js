import React from "react";
import Table from "../../components/Table";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import historiqueCommandeMenu from "../../utils/data/historiqueCommandeEnCour";
import historiqueCommandeEnLivre from "../../utils/data/historiqueCommandeLivre";
import s from "../../utils/Styles/Historique/Historique.module.css";

function HistoriqueCommande() {
  return (
    <>
      <div className={s.tableSeperator}>
        <h4>Commande en cours</h4>

        <Table data={historiqueCommandeMenu} />
      </div>
      <div className={s.tableSeperator}>
        <h4>Commande Livrer</h4>
        <Table data={historiqueCommandeEnLivre} />
      </div>
    </>
  );
}

export default HistoriqueCommande;

export const ProtectedHistoriqueCommande = withAuthRequired(HistoriqueCommande);
