import { createStore, applyMiddleware, compose} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


export const history = createBrowserHistory()

export function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
}
