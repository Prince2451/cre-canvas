import { StoreSlice } from "../../App/store";
import { Tool } from "./types";

export interface Slice {
  selectedTool: {
    type: Tool["type"];
  };
  setSelectedTool: (tool: Slice["selectedTool"]) => void;
}

const createSlice: StoreSlice<Slice> = (set, get) => {
  return {
    selectedTool: {
      type: "ARROW",
    },
    setSelectedTool: (tool) => set({ selectedTool: tool }),
  };
};

export default createSlice;
