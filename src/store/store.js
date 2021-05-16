import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { checkoutReducer } from "../pages/checkout";

const rootReducer = combineReducers({
  checkout: checkoutReducer
  /* reducers here */
});

const persistConfig = {
  key: "mainState",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export const store = createStore(
  persistedReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};