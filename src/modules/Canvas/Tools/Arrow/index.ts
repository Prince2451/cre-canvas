import { Tool, ToolCreator } from "../../types";
import { GiArrowCursor } from "react-icons/gi";

export interface IArrowTool extends Tool {
  type: "ARROW";
}

const createArrowTool: ToolCreator<IArrowTool> = () => {
  return {
    description: "Arrow Tool",
    Icon: GiArrowCursor,
    type: "ARROW",
  };
};
export default  createArrowTool;