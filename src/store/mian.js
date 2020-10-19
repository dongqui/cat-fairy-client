import { action } from "./helper";

export const SELECT_SIDEBAR_ITEM = 'SELECT_SIDEBAR_ITEM';
export const GET_COMMIT_HISTORY = 'GET_COMMIT_HISTORY';
export const GET_COMMIT_HISTORY_REQUEST = 'GET_COMMIT_HISTORY_REQUEST';
export const GET_COMMIT_HISTORY_SUCCESS = 'GET_COMMIT_HISTORY_SUCCESS';
export const GET_COMMIT_HISTORY_FAILED = 'GET_COMMIT_HISTORY_FAILED';
export const SET_OPEN_COMMIT_HISTORY = 'SET_OPEN_COMMIT_HISTORY';

export function selectedSidebarItem(sidebarItem) {
  return action(SELECT_SIDEBAR_ITEM, { sidebarItem });
}

export function getCommitHistory(uid) {
  return action(GET_COMMIT_HISTORY, { uid });
}
export function getCommitHistoryRequest() {
  return action(GET_COMMIT_HISTORY_REQUEST);
}
export function getCommitHistorySuccess(commitHistory) {
  return action(GET_COMMIT_HISTORY_SUCCESS, commitHistory)
}
export function getCommitHistoryFailed() {
  return action (GET_COMMIT_HISTORY_FAILED);
}
export function setOpenCommitHistory(isOpen) {
  return action(SET_OPEN_COMMIT_HISTORY, isOpen);
}

const initialState = {
  isCommitHistoryOpen: false,
  isSelectCatOpen: false,
  isSideBarOpen: true,
  loadingCommitHistory: false,
  commitHistories: [],
  selectedSidebarItem: '',
};

export default function main(state=initialState, action={}) {
  switch (action.type) {
    case SELECT_SIDEBAR_ITEM:
      return {
        ...state,
        selectedSidebarItem: action.payload.selectedSidebarItem,
      }
    case GET_COMMIT_HISTORY_REQUEST:
      return {
        ...state,
        loadingCommitHistory: true,
      };
    case GET_COMMIT_HISTORY_SUCCESS:
      return {
        ...state,
        loadingCommitHistory: false,
        commitHistory: action.payload.commitHistory,
      };
    case GET_COMMIT_HISTORY_FAILED:
      return {
        ...state,
        loadingCommitHistory: false,
      };
    case SET_OPEN_COMMIT_HISTORY:
      return {
        ...state,
        isCommitHistoryOpen: action.payload.isOpen,
      }
    default:
      return state;
  }
}
