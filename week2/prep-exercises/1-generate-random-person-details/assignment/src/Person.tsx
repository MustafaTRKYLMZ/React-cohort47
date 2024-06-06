import React from "react";

export const Person = ({ firstName, lastName, email }) => {
  return (
    <div>
      <ul>
        <li>
          <strong>First Name:</strong>{" "}
          {firstName ? firstName : <span>Loading...</span>}
        </li>
        <li>
          <strong>Last Name:</strong>{" "}
          {lastName ? lastName : <span>Loading...</span>}
        </li>
        <li>
          <strong>Email:</strong> {email ? email : <span>Loading...</span>}
        </li>
      </ul>
    </div>
  );
};
