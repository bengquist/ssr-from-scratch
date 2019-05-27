import { combineReducers } from "redux";
import usersReducer from "./user/reducers";

const reducers = combineReducers({
  users: usersReducer
});

export default reducers;

export type AppState = ReturnType<typeof reducers>;
