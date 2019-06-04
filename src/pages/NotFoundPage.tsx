import React from "react";

function NotFoundPage({ staticContext = {} }: any) {
  staticContext.notFound = true;
  console.log(staticContext);

  return <h1>Oof, route not found</h1>;
}

export default {
  component: NotFoundPage
};
