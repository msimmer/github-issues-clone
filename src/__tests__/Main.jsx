import React from "react";
import { Provider } from "react-redux";
import { MockedProvider } from "react-apollo/test-utils";
import TestRenderer from "react-test-renderer";
import Main from "../components/Main";
import { GITHUB_ISSUES_QUERY } from "../queries";
import store from "../store";
import waitForExpect from "wait-for-expect";

const renderMocks = [
  {
    request: {
      query: GITHUB_ISSUES_QUERY,
      variables: {
        states: ["OPEN"],
        after: null
      }
    },
    result: {
      data: {
        repository: {
          issues: {
            totalCount: 1,
            pageInfo: {
              hasNextPage: true,
              hasPreviousPage: true
            },
            edges: [
              {
                cursor: "foo",
                node: {
                  assignees: {
                    edges: [
                      {
                        node: {
                          avatarUrl: "img.jpg",
                          id: "1",
                          name: "foo"
                        }
                      }
                    ]
                  },
                  author: {
                    login: "foo"
                  },
                  comments: {
                    totalCount: 1
                  },
                  id: 1,
                  labels: {
                    edges: [
                      {
                        node: {
                          id: 1,
                          name: "foo",
                          color: "ff0000"
                        }
                      }
                    ]
                  },
                  number: 1,
                  publishedAt: 111111,
                  state: "OPEN",
                  title: "foo"
                }
              }
            ]
          }
        }
      }
    }
  }
];

const errorMocks = {
  request: {
    query: GITHUB_ISSUES_QUERY,
    variables: {
      states: ["OPEN"],
      after: null
    }
  },
  error: new Error("bogus")
};

describe("<Main />", () => {
  it("renders the response", () => {
    TestRenderer.create(
      <Provider store={store}>
        <MockedProvider mocks={renderMocks} addTypename={false}>
          <Main />
        </MockedProvider>
      </Provider>
    );
  });

  it("shows loading", () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MockedProvider mocks={[]}>
          <Main />
        </MockedProvider>
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree.children[0].children[0]).toBe("Loading ...");
  });

  it("shows errors", async () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MockedProvider mocks={[errorMocks]} addTypename={false}>
          <Main />
        </MockedProvider>
      </Provider>
    );

    await waitForExpect(() => {
      const tree = component.toJSON();
      expect(tree.children).toContain("Error! Network error: bogus");
    });
  });
});
