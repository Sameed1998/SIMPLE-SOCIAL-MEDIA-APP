import { combineReducers } from 'redux';
import types from '../types';
import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
  AuthReducer,
});
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;