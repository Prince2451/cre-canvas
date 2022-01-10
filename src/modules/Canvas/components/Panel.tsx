import { Tool } from "../types";
import Toolbar from "./Toolbar";

interface IPanelProps {
  tools: Array<Tool>;
}

const Panel: React.FC<IPanelProps> = ({ tools }) => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2" >
      <Toolbar tools={tools} />
    </div>
  );
};

export default Panel;
