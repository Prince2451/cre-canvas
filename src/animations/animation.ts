import { UseSpringsProps } from "@react-spring/web";

export const defaultAnimation: UseSpringsProps = {
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
  config: {
    tension: 180,
    friction: 16,
  },
};

export const loginNavigationAnimation: UseSpringsProps = {
  from: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
  to: async (next) => {
    await next({ opacity: 1, scaleX: 10, scaleY: 40 });
    await next({ opacity: 0, delay: 300 });
  },
  config: {
    tension: 230,
    friction: 33,
  },
};
