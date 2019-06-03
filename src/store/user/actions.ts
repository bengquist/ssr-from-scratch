import { Dispatch } from "redux";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => async (
  dispatch: Dispatch,
  getState: any,
  request: any
) => {
  const res = await request.get("/users");

  dispatch({ type: FETCH_USERS, payload: res });
};
