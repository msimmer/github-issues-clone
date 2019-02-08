import React from "react";
import Labels from "./Labels";
import Assignees from "./Assignees";

const Issue = props => {
  return (
    <div className="issue">
      <div className="issue__icon">icon</div>
      <div className="issue__details">
        <div className="issue__details__title">
          <React.Fragment>{props.title}</React.Fragment>
          <Labels {...props.labels} />
        </div>
        <div className="issue__details__meta">
          <div>#{props.number}</div>
          <div>{props.publishedAt}</div>
          <div>{props.author.login}</div>
        </div>
      </div>
      <div className="issue__assignees">
        <Assignees {...props.assignees} />
      </div>
      <div className="issue__comments">
        {props.comments.totalCount > 0 ? props.comments.totalCount : ""}
      </div>
    </div>
  );
};

export default Issue;
