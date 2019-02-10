import gql from "graphql-tag";

export const GITHUB_ISSUES_QUERY = gql`
  query($states: [IssueState!], $after: String) {
    repository(owner: "facebook", name: "react") {
      issues(
        first: 25
        orderBy: { field: CREATED_AT, direction: DESC }
        states: $states
        after: $after
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            assignees(first: 3) {
              edges {
                node {
                  avatarUrl(size: 24)
                  id
                  name
                }
              }
            }
            author {
              login
            }
            comments {
              totalCount
            }
            id
            labels(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
            number
            publishedAt
            state
            title
          }
        }
      }
    }
  }
`;
