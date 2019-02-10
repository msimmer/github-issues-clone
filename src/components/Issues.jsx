// @flow

import type { Repository, IssueNode } from "../types";

import * as React from "react";
import Issue from "./Issue";

const Issues = (props: { repository: Repository }): React.Node => {
  const { edges } = props.repository.issues;
  if (edges.length < 1) return null;
  return edges.map(({ node }: IssueNode) => <Issue key={node.id} {...node} />);
};

export default Issues;
