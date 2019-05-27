import HomePage from "../pages/HomePage";
import UsersListPage from "../pages/UsersListPage";
import { ReactNode } from "react";

export type ConfigRoute = {
  path: string;
  component: ReactNode;
  loadData?: () => void;
  exact?: boolean;
};

export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users"
  }
];
