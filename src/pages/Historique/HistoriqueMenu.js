import React from "react";
import { withAuthRequired } from "../../hoc/withAuthRequired";
import s from "../../utils/Styles/Historique/Historique.module.css";
import Table from "../../components/Table";
import data from "../../utils/data/historiqueMenuPlus";

function HistoriqueMenu() {
  return (
    <>
      <div className={s.tableSeperator}>
        <h4>Plat les plus vendu</h4>
        <div className={s.innerContent}>
          <div className={s.flex}>
            <div className={s.col_left}>
              <h5>Plat</h5>
              <div className={s.card}>
                <img src="../." alt="img-repas" className={s.img} />
                <p>
                  Water fufu and eru <br /> 2500F
                </p>
                <p className={s.info}>Total de 25 plats vendu</p>
              </div>
            </div>

            <div className={s.col_middle}>
              <h5>Commande</h5>
              <Table data={data} />
            </div>
            <div className={s.col_right}>
              <h5>Vente Total</h5>
              <div className={s.priceFlex}>
                <div>25 500f </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.tableSeperator}>
        <h4>Plat les moins vendu</h4>
        <div className={s.innerContent}>
          <div className={s.flex}>
            <div className={s.col_left}>
              <h5>Plat</h5>
              <div className={s.card}>
                <img src="" alt="img-repas" className={s.img} />
                <p>
                  Water fufu and eru <br /> 2500F
                </p>
                <p className={s.info}>Total de 25 plats vendu</p>
              </div>
            </div>

            <div className={s.col_middle}>
              <h5>Commande</h5>
              <Table data={data} />
            </div>
            <div className={s.col_right}>
              <h5>Vente Total</h5>
              <div className={s.priceFlex}>
                <div>2 500f </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoriqueMenu;

export const ProtectedHistoriqueMenu = withAuthRequired(HistoriqueMenu);
