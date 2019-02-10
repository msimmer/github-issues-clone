// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type IssueState = [] | ["OPEN"] | ["CLOSE"] | ["OPEN", "CLOSE"];

export type Label = {
  node: {
    id: string,
    color: string,
    name: string
  }
};

export type Issue = {
  id: string,
  state: "OPEN" | "CLOSE",
  title: string,
  number: number,
  publishedAt: Date,
  labels: {
    edges: Label[]
  },
  author: {
    login: string
  },
  assignees: {
    edges: Object[]
  },
  comments: {
    totalCount: number
  }
};

export type IssueNode = {
  cursor: string,
  node: Issue
};

export type Repository = {
  issues: {
    edges: IssueNode[]
  }
};

export type Response = {
  data: {
    error: Error,
    loading: boolean,
    repository: Repository
  }
};

export type Variables = {
  states: IssueState,
  after: string
};

export type State = {
  states?: IssueState,
  after: string | null,
  cursors: Array<string | null>
};

export type NavigateAction = {
  type: "NAVIGATE",
  payload: State
};

export type ActionTypes = {
  NAVIGATE: string
};

export type Action = NavigateAction;

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>; // eslint-disable-line
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Navigate = State => Dispatch => State;
