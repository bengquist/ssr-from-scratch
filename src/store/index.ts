import { combineReducers } from "redux";
import usersReducer from "./user/reducers";
import authReducer from "./auth/reducers";

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer
});

export default reducers;

export type AppState = ReturnType<typeof reducers>;
