import React from "react";

import s from "../utils/Styles/Historique/Table.module.css";

function Table({ data }) {
  const keys = Object.keys(data[0]);
  const TableHead = () => {
    let arr = [];
    for (let index = 0; index < keys.length; index++) {
      if (keys[index] !== "id") {
        arr.push(<th key={keys[index]}>{keys[index]}</th>);
      }
    }
    return arr;
  };

  const TableBody = () => {
    return data.map((item, index) => (
      <tr key={index}>
        {keys.map(
          (key) =>
            key !== "id" && (
              <td data-label={key} key={key}>
                {item[key]}
              </td>
            )
        )}
      </tr>
    ));
  };

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <TableHead />
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}

export default Table;
