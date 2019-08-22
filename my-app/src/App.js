import React, { useState } from "react";

import "./App.css";

import CompletedForm from "./components/CompletedForm";
import Form from "./components/Form";
import Data from "./Data";

function App() {
  const [members, setMembers] = useState(Data);

  const addMembers = member => {
    setMembers([...members, member]);
  };

  // const editability = member => {
  //   setEditability(member);
  // }

  // const

  return (
    <div className="App">
      <h1 className="roster">Roster Builder</h1>
      <Form addMembers={addMembers} />
      <div className="h1-info">
        <h1>Completed Forms</h1>
        <CompletedForm members={members} />
      </div>
    </div>
  );
}

export default App;
