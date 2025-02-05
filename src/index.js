import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from "./middleware";
// thunk is a function that can perform delayed work, such as asynchronous operations or conditional logic.
import { thunk } from "redux-thunk";
import App from "./App";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const composedEnhancers = compose(
  // using devtools extension (simple version)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
