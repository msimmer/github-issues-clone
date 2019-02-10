// @flow

import * as React from "react";

const Assignee = ({
  index,
  login,
  avatarUrl
}: {
  index: number,
  login: string,
  avatarUrl: string
}): React.Element<"div"> => (
  <div className={`assignee assignee--${index}`}>
    <img src={avatarUrl} alt={login} />
  </div>
);

export default Assignee;
