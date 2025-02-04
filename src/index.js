import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { logger } from "./middleware";
import App from "./App";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
