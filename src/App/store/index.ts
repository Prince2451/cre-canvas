import create, { GetState, SetState } from "zustand";
import createAuthSlice, { IAuthSlice } from "../../containers/Auth/authSlice";

export type StoreState = IAuthSlice;

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