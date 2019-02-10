// @flow

import * as React from "react";
import Assignee from "./Assignee";

const Assignees = (props: { edges: Object[] }): React.Node => {
  if (!props.edges || props.edges.length < 1) return null;
  return props.edges.map(({ node }, i) => (
    <Assignee key={node.id} index={i} {...node} />
  ));
};

export default Assignees;
