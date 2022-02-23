import { StoreSlice } from "./store";
import { AnimationDetails, AnimationType } from "./types";

// create a component on position fixed and intialize it from x and y from children
// create subsequent components for particular transition
// dispatch animation from childrens

export interface Slice {
  navigatingAnimation: {
    type: AnimationType;
    animationDetails: AnimationDetails | null;
    startAnimation: (
      type: Slice["navigatingAnimation"]["type"],
      details: Exclude<Slice["navigatingAnimation"]["animationDetails"], null>
    ) => void;
    resetAnimation: () => void;
  };
}

const createSlice: StoreSlice<Slice> = (set, get) => {
  return {
    navigatingAnimation: {
      type: "",
      animationDetails: null,
      startAnimation: (type, animationDetails) =>
        set((state) => ({
          navigatingAnimation: {
            ...state.navigatingAnimation,
            type,
            animationDetails,
          },
        })),
      resetAnimation: () =>
        set((state) => ({
          navigatingAnimation: {
            ...state.navigatingAnimation,
            type: "",
            animationDetails: null,
          },
        })),
    },
  };
};

export default createSlice;
