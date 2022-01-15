import React from "react";
import { Path } from "react-konva";
import Konva from "konva";

interface IPathComponent extends Konva.PathConfig {}

const Component: React.FC<IPathComponent> = (props) => {
  return <Path {...props} />;
};

export default Component;
