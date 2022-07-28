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
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.company.name}</td>
        <td>{info.username}</td>
      </tr>
    );
  });

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Email</th>
            <th>Cliente</th>
            <th>Perfil de acesso</th>
          </tr>
        </thead>
        <tbody>{TableData}</tbody>
      </table>
    </>
  )
};

export default Table;
