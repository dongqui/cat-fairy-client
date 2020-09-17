import { action } from "./helper";
import { call, put } from 'redux-saga/effects';
import { getCommitHistoryApi } from '../api/commitHistory';

export const TOGGLE_SELECT_CAT = 'TOGGLE_SELECT_CAT';
export const TOGGLE_SIDE_BAR = 'OPEN_SIDE_BAR';
export const GET_COMMIT_HISTORY = 'GET_COMMIT_HISTORY';
export const GET_COMMIT_HISTORY_REQUEST = 'GET_COMMIT_HISTORY_REQUEST';
export const GET_COMMIT_HISTORY_SUCCESS = 'GET_COMMIT_HISTORY_SUCCESS';
export const GET_COMMIT_HISTORY_FAILED = 'GET_COMMIT_HISTORY_FAILED';

export function toggleSelectCat() {
  return action(TOGGLE_SELECT_CAT);
}
export function toggleSideBar() {
  return action(TOGGLE_SIDE_BAR);
}
export function getCommitHistory() {
  return action(GET_COMMIT_HISTORY);
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


export function* _getCommitHistory() {
  try {
    yield put(getCommitHistoryRequest());
    const commitHistory = yield call(getCommitHistoryApi, );
    yield put(getCommitHistorySuccess(commitHistory));
  } catch (error) {
    yield put(getCommitHistoryFailed(error));
  }
}

const initialState = {
  isSelectCatOpen: false,
  isSideBarOpen: false,
  loadingCommitHistory: false,
  commitHistory: [],
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
    default:
      return initialState;
  }
}
