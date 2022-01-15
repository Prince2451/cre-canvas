import { Circle } from "react-konva";
import { Stage as StageType } from "konva/lib/Stage";
import { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import Panel from "./components/Panel";
import { toolCreators } from "./Tools";

const Canvas: React.FC = () => {
  const [stageConfig, setStageConfig] = useState({
    width: (window.innerWidth * 2) / 3,
    height: (window.innerHeight * 2) / 3,
    scaleX: 1,
    scaleY: 1,
  });

  const tools = toolCreators.map((creator) => creator());
  const stageContainer = useRef<HTMLDivElement>(null);
  const stage = useRef<StageType>(null);

  useEffect(() => {
    function setStageSize() {
      if (stageContainer.current && stage.current) {
        const scale = Math.min(
          window.innerWidth / stageContainer.current.offsetWidth,
          window.innerHeight / stageContainer.current.offsetHeight
        );
        setStageConfig({
          width: stageContainer.current.offsetWidth,
          height: stageContainer.current.offsetHeight,
          scaleX: scale,
          scaleY: scale,
        });
      }
    }
    setStageSize();
    window.addEventListener("resize", setStageSize);
    return () => {
      window.removeEventListener("resize", setStageSize);
    };
  }, []);

  return (
    <div>
      <Panel tools={tools} />
      <div
        style={{ marginTop: "7vh" }}
        ref={stageContainer}
        className="w-2/3 m-auto shadow border rounded-lg bg-white h-h-10/12-screen"
      >
        <Stage ref={stage} {...stageConfig}>
          <Layer>
            <Circle
              x={window.innerWidth / 2}
              y={window.innerHeight / 2}
              radius={70}
              fill="red"
              stroke="black"
              strokeWidth={4}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
