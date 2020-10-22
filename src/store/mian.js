import { action } from "./helper";

export const SELECT_SIDEBAR_ITEM = 'SELECT_SIDEBAR_ITEM';
export const GET_COMMIT_HISTORY = 'GET_COMMIT_HISTORY';
export const GET_COMMIT_HISTORY_REQUEST = 'GET_COMMIT_HISTORY_REQUEST';
export const GET_COMMIT_HISTORY_SUCCESS = 'GET_COMMIT_HISTORY_SUCCESS';
export const GET_COMMIT_HISTORY_FAILED = 'GET_COMMIT_HISTORY_FAILED';
export const SET_OPEN_COMMIT_HISTORY = 'SET_OPEN_COMMIT_HISTORY';

export const SELECT_CAT = 'SELECT_CAT';
export const SELECT_CAT_REQUEST = 'SELECT_CAT_REQUEST';
export const SELECT_CAT_SUCCESS = 'SELECT_CAT_SUCCESS';
export const SELECT_CAT_FAILED = 'SELECT_CAT_FAILED';

export const selectedSidebarItem = (sidebarItem) => action(SELECT_SIDEBAR_ITEM, { sidebarItem });
export const getCommitHistory = (uid) => action(GET_COMMIT_HISTORY, { uid });
export const getCommitHistoryRequest = () => action(GET_COMMIT_HISTORY_REQUEST);
export const getCommitHistorySuccess = (commitHistory) => action(GET_COMMIT_HISTORY_SUCCESS, { commitHistory });
export const getCommitHistoryFailed = () => action (GET_COMMIT_HISTORY_FAILED);
export const setOpenCommitHistory = (isCommitHistoryOpen) =>
  action(SET_OPEN_COMMIT_HISTORY, { isCommitHistoryOpen });
export const selectCat = (catType) => action(SELECT_CAT, { catType });
export const selectCatRequest = () => action(SELECT_CAT_REQUEST);
export const selectCatSuccess = (catType) => action(SELECT_CAT_SUCCESS, { catType });
export const selectCatFailed = () => action(SELECT_CAT_FAILED);

const initialState = {
  isCommitHistoryOpen: false,
  isSelectCatOpen: false,
  isSideBarOpen: true,
  commitHistories: [],
  selectedSidebarItem: '',
  catType: null,
  loadingCommitHistory: false,
  loadingSelectCat: false,
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
        isCommitHistoryOpen: action.payload.isCommitHistoryOpen,
      }
    case SELECT_CAT_REQUEST: {
      return {
        ...state,
        loadingSelectCat: false,
      }
    }
    case SELECT_CAT_SUCCESS: {
      return {
        ...state,
        catType: action.payload.catType,
      }
    }
    default:
      return state;
  }
}
