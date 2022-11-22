import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const firstContacts = contacts.slice(0, 5);

  const ContactList = () => {
    const [contact, setContacts] = useState(firstContacts);

    const addRandomContact = () => {
      setContacts([...contact, Math.floor(Math.random() * contacts.length)]);
    };
  };
  return (
    <div className="App">
      <header>
        <b>IronContacts</b>
      </header>
      <button>Add Random Contact</button>
      <button>Sort by name</button>
      <button>Sort by popularity</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {firstContacts.map((val, key) => {
          return (
            <tr key={key}>
              <td>
                <img
                  className="contactImg"
                  src={val.pictureUrl}
                  alt={val.name}
                />
              </td>
              <td>{val.name}</td>
              <td>{val.popularity}</td>
              <td>{!val.wonOscar ? "" : "🏆"}</td>
              <td>{!val.wonEmmy ? "" : "🏆"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
