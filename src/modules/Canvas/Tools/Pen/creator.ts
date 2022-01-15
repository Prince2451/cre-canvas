import { Tool, ToolCreator } from "../../types";
import { BsPen } from "react-icons/bs";

export interface IPenTool extends Tool {
  type: "PEN";
}

const createTool: ToolCreator<IPenTool> = () => {
  return {
    description: "Pen Tool",
    Icon: BsPen,
    type: "PEN",
  };
};

export default createTool;
