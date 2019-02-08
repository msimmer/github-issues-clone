import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Assignees from "../components/Assignees";

configure({ adapter: new Adapter() });

describe("<Assignees />", () => {
  const edges = [
    {
      id: 1,
      login: "foo",
      avatarUrl: "foo.jpg"
    },
    {
      id: 2,
      login: "bar",
      avatarUrl: "bar.jpg"
    }
  ];

  it("matches the snapshots", () => {
    const component = shallow(<Assignees edges={[]} />);
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({
      edges: edges.map((a, index) => ({ node: { ...a, index } }))
    });
    expect(toJSON(component)).toMatchSnapshot();
  });
});
