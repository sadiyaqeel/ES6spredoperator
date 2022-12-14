import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(e) {
    const { name, value } = e.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={updateContact}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={updateContact}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
