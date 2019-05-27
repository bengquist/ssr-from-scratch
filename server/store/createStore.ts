import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../src/store";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
