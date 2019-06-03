import { FETCH_CURRENT_USER, FetchCurrentUserAction } from "./types";

const authReducer = (state = null, action: FetchCurrentUserAction) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

export default authReducer;
