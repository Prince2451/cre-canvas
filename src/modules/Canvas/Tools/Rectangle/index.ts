import { Tool, ToolCreator } from "../../types";
import { BiRectangle } from "react-icons/bi";

export interface IRectangleTool extends Tool {
  type: "RECTANGLE";
}

const createRectangleTool: ToolCreator<IRectangleTool> = () => {
  return {
    description: "Rectangle Tool",
    Icon: BiRectangle,
    type: "RECTANGLE",
  };
};

export default createRectangleTool;
