// @flow

import type { State, Navigate } from "../types";

import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Query } from "react-apollo";
import Loading from "./Loading";
import Issues from "./Issues";
import Pagination from "./Pagination";
import { navigate } from "../reducers/query";
import { GITHUB_ISSUES_QUERY } from "../queries";

const Main = (props: { query: State, navigate: Navigate }) => {
  const { query } = props;
  const { cursors, ...variables } = query;

  return (
    <main>
      <Query
        query={GITHUB_ISSUES_QUERY}
        variables={{ ...variables }}
        notifyOnNetworkStatusChange
      >
        {({
          loading,
          error,
          data,
          networkStatus
        }: {
          loading: boolean,
          error: Error,
          data: Object,
          networkStatus: number
        }) => {
          if (networkStatus === 4) return "Refetching!";
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;

          return (
            <React.Fragment>
              <Issues {...data} />
              <Pagination navigate={props.navigate} {...query} {...data} />
            </React.Fragment>
          );
        }}
      </Query>
    </main>
  );
};

export default connect(
  ({ query }) => ({ query }),
  dispatch => bindActionCreators({ navigate }, dispatch)
)(Main);
