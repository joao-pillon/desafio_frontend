import "./style.css";
import { useEffect, useState } from "react";
import { Nav } from "../../components/nav.js";
import { Checkbox } from "@mui/material";

const Table = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [showUsers, setShowUsers] = useState(true);
  const [showEmails, setShowEmails] = useState(true);
  const [showClients, setShowClients] = useState(true);
  const [showAccess, setShowAccess] = useState(true);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(json));
  }, []);

  const handleClick = () => {
    if (open === true) {
      return setOpen(false);
    } else return setOpen(true);
  };

 const toogleUser = () => {
  if (showUsers === true) {
    return setShowUsers(false);
  } else return setShowUsers(true);
 }

 const toogleEmail = () => {
  if (showEmails === true) {
    return setShowEmails(false);
  } else return setShowEmails(true);
 }

 const toogleClient = () => {
  if (showClients === true) {
    return setShowClients(false);
  } else return setShowClients(true);
 }

 const toogleAccess = () => {
  if (showAccess === true) {
    return setShowAccess(false);
  } else return setShowAccess(true);
 }





  const TableData = data.map((info) => {
    if (info.id % 2 === 0) {
      return (
        <tr>
           {showUsers ? <td>{info.name}</td> : <></>}
           {showEmails ?<td>{info.email}</td>: <></>}
           {showClients ?<td>{info.company.name}</td>: <></>}
           {showAccess ?<td>
          <div className="profile">{info.username}</div>
          </td>: <></>}
          <td className="icons">
            <div className="edit"></div>
            <div className="delete"></div>
          </td>
        </tr>
      );
    }
    return (
      <tr>
        {showUsers ?  <td className="par">{info.name}</td> : <></> }
        {showEmails ?  <td className="par">{info.email}</td>: <></> }
        {showClients ? <td className="par">{info.company.name}</td>: <></> }
        {showAccess ? <td className="par">
          <div className="profile">{info.username}</div>
        </td>: <></> }
        <td className="par-icons">
          <div className="par" className="edit"></div>
          <div className="par" className="delete"></div>
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
            <input type="checkbox"  onClick={toogleUser}/> Usuario{" "}
            <span className="checkmark" ></span>
            <input type="checkbox"  onClick={toogleEmail}/>
            E-mail<span className="checkmark" ></span>
            <input type="checkbox"  onClick={toogleClient}/>
            Cliente<span className="checkmark"></span>
            <input type="checkbox"  onClick={toogleAccess}/>
            Perfil de acesso<span className="checkmark"></span>
          </div>
        </Nav>
      </div>
      <div className="Elements">
        <table className="table">
          <thead>
            <tr>
              {showUsers ? <th>Usuário</th>: <></> }
              {showEmails ?<th>Email</th>: <></> }
              {showClients ?<th>Cliente</th>: <></> }
              {showAccess ?<th>Perfil de acesso</th>: <></> }
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
