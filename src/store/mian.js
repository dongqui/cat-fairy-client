import { action } from "./helper";

export const SELECT_SIDEBAR_ITEM = 'SELECT_SIDEBAR_ITEM';
export const GET_CHALLENGE_STATUS = 'GET_CHALLENGE_STATUS';
export const GET_CHALLENGE_STATUS_REQUEST = 'GET_CHALLENGE_STATUS_REQUEST';
export const GET_CHALLENGE_STATUS_SUCCESS = 'GET_CHALLENGE_STATUS_SUCCESS';
export const GET_CHALLENGE_STATUS_FAILED = 'GET_CHALLENGE_STATUS_FAILED';

export const SELECT_CAT = 'SELECT_CAT';
export const SELECT_CAT_REQUEST = 'SELECT_CAT_REQUEST';
export const SELECT_CAT_SUCCESS = 'SELECT_CAT_SUCCESS';
export const SELECT_CAT_FAILED = 'SELECT_CAT_FAILED';

export const selectedSidebarItem = (sidebarItem) => action(SELECT_SIDEBAR_ITEM, { sidebarItem });
export const getChallengeStatus = (uid) => action(GET_CHALLENGE_STATUS, { uid });
export const getChallengeStatusRequest = () => action(GET_CHALLENGE_STATUS_REQUEST);
export const getChallengeStatusSuccess = (commitHistory) => action(GET_CHALLENGE_STATUS_SUCCESS, { commitHistory });
export const getChallengeStatusFailed = () => action (GET_CHALLENGE_STATUS_FAILED);
export const selectCat = (catType) => action(SELECT_CAT, { catType });
export const selectCatRequest = () => action(SELECT_CAT_REQUEST);
export const selectCatSuccess = (catType) => action(SELECT_CAT_SUCCESS, { catType });
export const selectCatFailed = () => action(SELECT_CAT_FAILED);

const initialState = {
  isChallengeStatusOpen: false,
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
    case GET_CHALLENGE_STATUS_REQUEST:
      return {
        ...state,
        loadingCommitHistory: true,
      };
    case GET_CHALLENGE_STATUS_SUCCESS:
      return {
        ...state,
        loadingCommitHistory: false,
        commitHistory: action.payload.commitHistory,
      };
    case GET_CHALLENGE_STATUS_FAILED:
      return {
        ...state,
        loadingCommitHistory: false,
      };
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
