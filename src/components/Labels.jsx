// @flow

import type { Label as LabelType } from "../types";

import * as React from "react";
import Label from "./Label";

const Labels = (props: { edges: LabelType[] }): React.Element<typeof Label>[] =>
  props.edges.map(({ node }: LabelType) => <Label key={node.id} {...node} />);

export default Labels;
