import { UseSpringProps } from "@react-spring/web";

export type AnimationType = "login" | "";
export type AnimationDetails = {
  initials: { x: number; y: number; width?: number; height?: number };
  animate: UseSpringProps;
};
