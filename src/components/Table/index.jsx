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

    if (info.id % 2 === 0) {

    
    return (
      <tr>
        <td className="par">{info.name}</td>
        <td className="par">{info.email}</td>
        <td className="par">{info.company.name}</td>
        <td className="par">
          <div className="profile">{info.username}</div>
        </td>
        <td className="par" className="icons">
          <div className="par" className="edit"></div>
          <div className="par" className="delete"></div>
        </td>
      </tr>
    );
  };
  return   <tr>
  <td className="impar">{info.name}</td>
  <td className="impar">{info.email}</td>
  <td className="impar">{info.company.name}</td>
  <td className="impar">
    <div className="profile">{info.username}</div>
  </td>
  <td className="impar" className="icons">
    <div className="impar" className="edit"></div>
    <div className="impar" className="delete"></div>
  </td>
</tr>
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
