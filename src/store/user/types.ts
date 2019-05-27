export interface UserState {
  data: any;
}

export const FETCH_USERS = "FETCH_USERS";

interface UpdateSessionAction {
  type: typeof FETCH_USERS;
  payload: UserState;
}

export type UserActionTypes = UpdateSessionAction;
