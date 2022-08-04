import "./style.css";
import { useEffect, useState } from "react";
import { Nav } from "./nav.js";
import { Checkbox } from "@mui/material";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(json));
  }, []);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(open)
    if (open ===true) {
      return setOpen(false)
    }
    else
    return setOpen(true);
  };
  const TableData = data.map((info) => {
    if (info.id % 2 === 0) {
      return (
        <tr>
          <td>{info.name}</td>
          <td>{info.email}</td>
          <td>{info.company.name}</td>
          <td>
            <div className="profile">{info.username}</div>
          </td>
          <td className="icons">
            <div className="edit"></div>
            <div className="delete"></div>
          </td>
        </tr>
      );
    }
    return (
      <tr>
        <td className="impar">{info.name}</td>
        <td className="impar">{info.email}</td>
        <td className="impar">{info.company.name}</td>
        <td className="impar">
          <div className="profile">{info.username}</div>
        </td>
        <td className="impar-icons">
          <div className="impar" className="edit"></div>
          <div className="impar" className="delete"></div>
        </td>
      </tr>
    );
  });

  return (
    <div className="Container">
      <div>
        <Nav open={open}>
          <h3>Linhas por página</h3>

          <div className="colunas">
            <input type="checkbox" />
            Padrão<span className="checkmark"></span>
            <input type="checkbox" />
            50 linhas<span className="checkmark"></span>
          </div>

          <hr />

          <h3>Colunas</h3>
          <div className="colunas">
            <input type="checkbox" /> Usuario <span className="checkmark"></span>
            <input type="checkbox" />
            E-mail<span className="checkmark"></span>
            <input type="checkbox" />
            Cliente<span className="checkmark"></span>
            <input type="checkbox" />
            Perfil de acesso<span className="checkmark"></span>
          </div>
        </Nav>
      </div>
      <div className="Elements">
        <table className="table">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Email</th>
              <th>Cliente</th>
              <th>Perfil de acesso</th>
              <th className="grid">
                <div></div>
                <div
                  id="ellipsis"
                  isOpened="isOpened"
                  onClick={handleClick}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>{TableData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
