import Panel from "./components/Panel";
import toolCreators from "./Tools";

const Canvas: React.FC = () => {
  const tools = toolCreators.map((creator) => creator());

  return (
    <div>
      <Panel tools={tools} />
    </div>
  );
};

export default Canvas;
