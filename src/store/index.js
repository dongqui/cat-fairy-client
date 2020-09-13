import { combineReducers } from 'redux';

import auth from './auth';
import main from './mian';

export default combineReducers({
  auth,
  main,
})
