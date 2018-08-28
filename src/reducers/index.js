import { combineReducers } from 'redux';
import authReducer from './authReducer'
import visualReducer from './visualReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  visual: visualReducer
})

export default rootReducer;
