import { combineReducers } from 'redux';
import authReducer from './authReducer'
import visualReducer from './visualReducer'
import activitiesReducer from './activitiesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  visual: visualReducer,
  activities: activitiesReducer
})

export default rootReducer;
