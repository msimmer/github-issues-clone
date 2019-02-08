import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import App from "../components/App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshots", () => {
    const component = shallow(<App />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
