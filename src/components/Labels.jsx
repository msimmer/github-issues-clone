import React from "react";
import Label from "./Label";

const Labels = props => {
  if (!props.edges || props.edges.length < 1) return null;
  return props.edges.map(({ node }) => <Label key={node.id} {...node} />);
};

export default Labels;
