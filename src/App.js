import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));

  const handleAddRandomContact = () => {
    const remainingContacts = contactList.filter((contact) => {
      return !contacts.includes(contact);
    });
    if (remainingContacts.length) {
      const randomContact =
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContacts([...contacts, randomContact]);
    }
  };

  const handleSortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  const handleDeleteContact = (id) => {
    const contactsExcludingDeletedContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(contactsExcludingDeletedContact);
  };

  return (
    <div className="App">
      <header>
        <b>IronContacts</b>
      </header>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByName}>Sort by name</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  className="contactImg"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
