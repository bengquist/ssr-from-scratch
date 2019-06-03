import { FETCH_CURRENT_USER } from "./types";
import { Dispatch } from "redux";

export const fetchCurrentUser = () => async (
  dispatch: Dispatch,
  getState: any,
  request: any
) => {
  const res = await request.get("/current_user");

  dispatch({ type: FETCH_CURRENT_USER, payload: res });
};
