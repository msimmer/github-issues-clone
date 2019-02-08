import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Label from "../components/Label";

configure({ adapter: new Adapter() });

describe("<Label />", () => {
  it("contrasts the color", () => {
    const component = shallow(<Label name="foo" color="ffffff" />);
    expect(component.props().style).toHaveProperty("color", "black");
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ color: "000000" });
    expect(component.props().style).toHaveProperty("color", "white");
    expect(toJSON(component)).toMatchSnapshot();
  });
});
