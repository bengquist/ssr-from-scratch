import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./store";
import { renderRoutes } from "react-router-config";
import axios from "axios";

const request = axios.create({
  baseURL: "/api"
});

const store = createStore(
  reducers,
  (window as any).INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(request))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
