import React from "react";
import { contrastText } from "../util";

const Label = ({ name, color }) => (
  <div
    className="label"
    style={{ backgroundColor: `#${color}`, color: contrastText(color) }}
  >
    {name}
  </div>
);

export default Label;
