import { combineReducers } from 'redux';
import createReducer from '../../features/testarea/testReducer';

const rootReducer = combineReducers({
  test: createReducer,
});
export default rootReducer;
