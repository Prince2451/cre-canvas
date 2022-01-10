import { IconType } from "react-icons";

export type Tool = {
  type: string;
  Icon: IconType;
  description: string;
  children?: Array<Tool>;
};

export type ToolCreator<T extends Tool> = () => T