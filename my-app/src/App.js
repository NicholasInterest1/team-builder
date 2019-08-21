import React, { useState } from "react";

import "./App.css";

import CompletedForm from "./components/CompletedForm"
import Form from "./components/Form";
import Data from "./Data";

function App() {
  const [members, setMembers] = useState(Data);

  const addMembers = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addMembers={addMembers} />
      <Data members={members} />
      <h1>Completed Forms</h1>
      <CompletedForm members={members} />
    </div>
  );
}

export default App;
