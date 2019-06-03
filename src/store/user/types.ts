export interface UserState {
  data: any;
}

export const FETCH_USERS = "FETCH_USERS";

export interface FetchUsersAction {
  type: typeof FETCH_USERS;
  payload: UserState;
}
