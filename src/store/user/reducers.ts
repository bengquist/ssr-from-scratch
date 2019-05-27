import { UserActionTypes, FETCH_USERS } from "./types";

const usersReducer = (state = [], action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default usersReducer;
