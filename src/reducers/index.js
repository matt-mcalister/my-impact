import { combineReducers } from 'redux';
import authReducer from './authReducer'
import visualReducer from './visualReducer'
import activitiesReducer from './activitiesReducer'
import eventsReducer from './eventsReducer'
import spotlightsReducer from './spotlightsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  visual: visualReducer,
  activities: activitiesReducer,
  events: eventsReducer,
  spotlights: spotlightsReducer,
})

export default rootReducer;
