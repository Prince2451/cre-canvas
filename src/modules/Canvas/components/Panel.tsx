import { Slice } from "../slice";
import { Tool } from "../types";
import Toolbar from "./Toolbar";

interface PanelProps {
  tools: Array<Tool>;
  selectedTool: Slice["selectedTool"];
  onChange: (tool: Slice["selectedTool"]) => void;
}

const Panel: React.FC<PanelProps> = ({ tools, selectedTool, onChange }) => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2">
      <Toolbar tools={tools} selectedTool={selectedTool} onChange={onChange} />
    </div>
  );
};

export default Panel;
