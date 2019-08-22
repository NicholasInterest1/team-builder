import React, { useState } from "react";

const Form = props => {
  const [members, setMembers] = useState({ name: "", email: "", role: "" });
  const changeHandle = e => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newMember = {
      ...members,
      id: Date.now()
    };
    props.addMembers(newMember);
    setMembers({ name: "", email: "", role: "" });
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <div className="player">
          <label htmlFor="name">Player Name: </label>
        </div>
        <div className="player-form">
          <input
            name="name"
            type="text"
            placeholder="name"
            value={members.name}
            onChange={changeHandle}
          />
        </div>

        <div className="player">
          <label htmlFor="email">email: </label>
        </div>
        <div className="player-form">
          <input
            name="email"
            type="text"
            placeholder="email"
            value={members.email}
            onChange={changeHandle}
          />
        </div>

        <div className="player">
          <label htmlFor="role">Role: </label>
        </div>
        <div className="player-form">
          <input
            name="role"
            type="text"
            placeholder="role"
            value={members.role}
            onChange={changeHandle}
          />
        </div>

        <div className="btn">
          <button type="submit">Move Forward</button>
        </div>
      </form>
      </div>
  );
};

export default Form;
