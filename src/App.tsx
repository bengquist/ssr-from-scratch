import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./store/auth/actions";

function App({ route }: any) {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default {
  component: App,
  loadData: ({ dispatch }: any) => dispatch(fetchCurrentUser())
};
