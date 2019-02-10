import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Issues from "../components/Issues";

configure({ adapter: new Adapter() });

const mockProps = {
  repository: {
    issues: {
      edges: [
        {
          node: {
            id: 1
          }
        }
      ]
    }
  }
};

describe("<Issues />", () => {
  it("matches the snapshots", () => {
    const component = shallow(<Issues {...mockProps} />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
