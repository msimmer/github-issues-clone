// @flow

import type { Repository, Navigate } from "../types";

import * as React from "react";

type Props = {
  repository: Repository,
  after: string | null,
  cursors: Array<string | null>,
  navigate: Navigate
};

class Pagination extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (dir: string) => (): void => {
    const { edges } = this.props.repository.issues;
    const cursors = [...this.props.cursors];
    let after;

    if (dir === "prev") {
      after = cursors.pop() || null;
    } else {
      cursors.push(this.props.after);
      after = edges[edges.length - 1].cursor;
    }

    window.scrollTo(0, 0);
    this.props.navigate({ cursors, after });
  };

  render = () => {
    const { edges } = this.props.repository.issues;
    if (edges.length < 1) return null;

    const {
      hasNextPage,
      hasPreviousPage
    } = this.props.repository.issues.pageInfo;
    return (
      <div className="button__container">
        {hasPreviousPage && (
          <button onClick={this.handleClick("prev")}>prev</button>
        )}
        {hasNextPage && (
          <button onClick={this.handleClick("next")}>next</button>
        )}
      </div>
    );
  };
}

export default Pagination;
