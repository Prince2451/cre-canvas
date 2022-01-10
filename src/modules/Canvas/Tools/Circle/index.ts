import { Tool, ToolCreator } from "../../types";
import { GiCircle } from "react-icons/gi";

export interface ICircleTool extends Tool {
  type: "CIRCLE";
}

const createCircleTool: ToolCreator<ICircleTool> = () => {
  return {
    description: "Circle Tool",
    Icon: GiCircle,
    type: "CIRCLE",
  };
};

export default createCircleTool;