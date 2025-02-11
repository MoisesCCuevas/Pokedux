import React from "react";
import { Provider } from "react-redux";
// import { pokemonsReducer } from "./reducers/pokemons";
import rootReducer from "./reducers";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from "./middleware";
// thunk is a function that can perform delayed work, such as asynchronous operations or conditional logic.
import { thunk } from "redux-thunk";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  // using devtools extension (simple version)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, /* logger */)
);

const store = createStore(rootReducer, composedEnhancers);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
