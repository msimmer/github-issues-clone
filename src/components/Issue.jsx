// @flow

import type { Issue as IssueType } from "../types";

import * as React from "react";
import Labels from "./Labels";
import Assignees from "./Assignees";
import { diffTimeToHuman } from "../util";

const Issue = (props: IssueType): React.Element<"div"> => (
  <div className="issue">
    <div className="issue__icon material-icons">
      {props.state === "OPEN" ? "error_outline" : "check_circle_outline"}
    </div>
    <div className="issue__details">
      <div className="issue__details__title">
        <div className="issue__details__title--text">{props.title}</div>
        <Labels {...props.labels} />
      </div>
      <div className="issue__details__meta">
        <div>#{props.number}</div>
        <div>opened {diffTimeToHuman(props.publishedAt)} ago by</div>
        {props.author && props.author.login ? (
          <div>{props.author.login}</div>
        ) : null}
      </div>
    </div>
    <div className="issue__assignees">
      <Assignees {...props.assignees} />
    </div>
    <div className="issue__comments">
      {props.comments.totalCount > 0 ? (
        <div className="issue__comments__counter">
          <div className="material-icons">chat_bubble_outline</div>
          <div>{props.comments.totalCount}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  </div>
);

export default Issue;
