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
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        placeholder="name"
        value={members.name}
        onChange={changeHandle}
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        placeholder="example@example.com"
        value={members.email}
        onChange={changeHandle}
      />

      <label htmlFor="role">Role</label>
      <input
        name="role"
        type="text"
        placeholder="role"
        value={members.role}
        onChange={changeHandle}
      />

      <button type="submit">Move Forward</button>
    </form>
  );
};

export default Form;
