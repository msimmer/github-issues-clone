// @flow

export type IssueState = [] | ["OPEN"] | ["CLOSE"] | ["OPEN", "CLOSE"];

export type InputProps = {
  state: IssueState,
  after: string
};

export type Response = {
  data: {
    error: Error,
    loading: boolean,
    repository: {
      issues: Object[]
    }
  }
};

export type Variables = {
  states: IssueState,
  after: string
};
