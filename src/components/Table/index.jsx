import "./style.css";
import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(json));
  }, []);

  const TableData = data.map((info) => {
    return (
      <tr>
        <td bgcolor="blue">{info.name}</td>
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
  });

  return (
    <div className="Container">
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
                <div id="ellipsis"></div>
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
