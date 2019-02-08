// @flow

import React from "react";
import { ChildProps } from "react-apollo";
import withFilters from "../withFilters";
import Loading from "./Loading";
import Issue from "./Issue";
import type { InputProps, Response } from "../types";

class Issues extends React.Component<ChildProps<InputProps, Response>> {
  render = () => {
    const { loading, repository, error } = this.props.data;
    if (loading) return <Loading />;
    if (error) return <div>error</div>;
    return repository.issues.edges.map(({ node }) => (
      <Issue key={node.id} {...node} />
    ));
  };
}

export default withFilters(Issues);
