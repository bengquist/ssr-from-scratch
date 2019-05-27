import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => async (dispatch: Dispatch) => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

  dispatch({ type: FETCH_USERS, payload: res });
};
