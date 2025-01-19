import { createGlobalState } from "react-hooks-global-state";

const initialState = { openSidebar: false };
export const { setGlobalState, useGlobalState } =
  createGlobalState(initialState);
