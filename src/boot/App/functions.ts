import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import duckReducers from "src/ducks/reducers";

export const initiateStore = () => {
  const middlewares = [thunk];

  const store = createStore(
    combineReducers({
      ...duckReducers
    }),
    compose(applyMiddleware(...middlewares))
  );

  return store;
};
