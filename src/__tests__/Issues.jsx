import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Issues from "../components/Issues";

configure({ adapter: new Adapter() });

describe("<Issues />", () => {
  it("matches the snapshots", () => {
    const component = shallow(<Issues states={["OPEN"]} />);
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ states: ["CLOSE"] });
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ states: ["CLOSE", "OPEN"] });
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ states: [] });
    expect(toJSON(component)).toMatchSnapshot();
  });
});
