import React from "react";
import { Circle } from "react-konva";
import Konva from "konva";

interface ICircleComponent extends Konva.CircleConfig {}

const Component: React.FC<ICircleComponent> = (props) => {
  return <Circle {...props} />;
};

export default Component;
