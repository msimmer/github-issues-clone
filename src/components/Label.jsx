// @flow

import * as React from "react";
import { contrastText } from "../util";

const Label = ({
  name,
  color
}: {
  name: string,
  color: string
}): React.Element<"div"> => (
  <div
    className="label"
    style={{ backgroundColor: `#${color}`, color: contrastText(color) }}
  >
    {name}
  </div>
);

export default Label;
