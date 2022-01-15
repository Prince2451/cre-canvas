import React from "react";
import { Rect } from "react-konva";
import Konva from "konva";

interface IRectComponent extends Konva.RectConfig {}

const Component: React.FC<IRectComponent> = (props) => {
  return <Rect {...props} />;
};

export default Component;
