// @flow

import type { State, Action, ActionTypes, Dispatch } from "../types";

const initialState: State = {
  states: ["OPEN"],
  after: null,
  cursors: []
};

const actionTypes: ActionTypes = {
  NAVIGATE: "NAVIGATE"
};

export const navigate = (data: State) => (dispatch: Dispatch) =>
  dispatch({
    type: actionTypes.NAVIGATE,
    payload: { ...data }
  });

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.NAVIGATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
