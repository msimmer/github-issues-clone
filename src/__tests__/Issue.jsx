import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Issue from "../components/Issue";

configure({ adapter: new Adapter() });

describe("<Issue />", () => {
  const RealDate = Date;
  const publishedAt = 1549641976000;
  const now = 1549643215436;

  const mockProps = {
    state: "OPEN",
    title: "foo",
    labels: [],
    number: 1,
    publishedAt,
    author: {
      login: "bar"
    },
    assignees: [],
    comments: {
      totalCount: 0
    }
  };

  function mockDate() {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(publishedAt);
      }
      static now() {
        return now;
      }
    };
  }

  afterEach(() => (global.Date = RealDate));
  beforeEach(() => mockDate());

  it("matches the snapshots", () => {
    const component = shallow(<Issue {...mockProps} />);
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ labels: [{ name: "l1", color: "000000" }] });
    expect(toJSON(component)).toMatchSnapshot();

    component.setProps({ comments: { totalCount: 1 } });
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders the date", () => {
    const component = shallow(<Issue {...mockProps} />);
    expect(component.find(".issue__details__meta").text()).toBe(
      "#1opened 21 minutes ago bybar"
    );
  });

  it("renders the icons", () => {
    const component = shallow(<Issue {...mockProps} />);
    expect(component.find(".issue__icon").text()).toBe("error_outline");

    component.setProps({ state: "CLOSE" });
    expect(component.find(".issue__icon").text()).toBe("check_circle_outline");
  });
});
