import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";

const rootReducer = combineReducers({
  /* reducers here*/
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
