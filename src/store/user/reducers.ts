import { FetchUsersAction, FETCH_USERS } from "./types";

const usersReducer = (state = [], action: FetchUsersAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default usersReducer;
