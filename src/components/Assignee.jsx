import React from "react";

const Assignee = ({ index, login, avatarUrl }) => (
  <div className={`assignee assignee--${index}`}>
    <img src={avatarUrl} alt={login} />
  </div>
);

export default Assignee;
