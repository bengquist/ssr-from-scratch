import App from "../App";
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
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      }
    ]
  }
];
