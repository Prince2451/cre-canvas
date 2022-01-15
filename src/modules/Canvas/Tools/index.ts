import React from "react";
import { Tool, ToolCreator } from "../types";
import * as Arrow from "./Arrow";
import * as Circle from "./Circle";
import * as Pen from "./Pen";
import * as Rectangle from "./Rectangle";

const tools: { createTool: ToolCreator; Component?: React.FC }[] = [
  Arrow,
  Pen,
  Circle,
  Rectangle,
];

const components: Record<Tool["type"], React.FC | null> = {};
const toolCreators: ToolCreator[] = [];

tools.forEach((tool) => {
  toolCreators.push(tool.createTool);
  components[tool.createTool().type] = tool.Component || null;
});

export { toolCreators, components };
