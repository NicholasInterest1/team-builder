import React from "react";

const CompletedForm = props => {
  return (
    <div>
      {props.member.map(member => {
        return (
          <div>
            <h1>{member.name}</h1>
            <h2>{member.email}</h2>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedForm;
