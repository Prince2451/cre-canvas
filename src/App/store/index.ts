import create, { GetState, SetState } from "zustand";
import createAuthSlice, {
  Slice as CanvasSlice,
} from "../../modules/Canvas/slice";

export type StoreState = CanvasSlice;

export type StoreSlice<T> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => T;

const useStore = create<StoreState>((set, get) => {
  return {
    ...createAuthSlice(set, get),
  };
});

export default useStore;
