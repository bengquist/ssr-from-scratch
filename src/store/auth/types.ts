export interface UserState {
  data: any;
}

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export interface FetchCurrentUserAction {
  type: typeof FETCH_CURRENT_USER;
  payload: UserState;
}
