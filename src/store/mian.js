import { action } from "./helper";

export const TOGGLE_SELECT_CAT = 'TOGGLE_SELECT_CAT';
export const TOGGLE_SIDE_BAR = 'OPEN_SIDE_BAR';

export function toggleSelectCat() {
  return action(TOGGLE_SELECT_CAT);
}

export function toggleSideBar() {
  return action(TOGGLE_SIDE_BAR);
}

const initialState = {
  isSelectCatOpen: false,
  isSideBarOpen: false,
};

export default function main(state=initialState, action={}) {
  switch (action.type) {
    case TOGGLE_SELECT_CAT:
      return {
        ...state,
        isSelectCatOpen: !state.isSelectCatOpen,
      };
    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        isSelectCatOpen: !state.isSelectCatOpen,
      };
    default:
      return initialState;
  }
}
