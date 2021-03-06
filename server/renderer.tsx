import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../src/routes/Routes";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

function renderer(req: any, store: any, context: any) {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
  <html>
    <head></head>
      <body>
        <div id="root">${content}</div>
          <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
          </script>
        <script src="bundle.js"></script>
      </body>
  </html>
  `;
}

export default renderer;
