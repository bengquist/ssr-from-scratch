import express from "express";
import { renderToString } from "react-dom/server";
import Home from "./components/Home";
import * as React from "react";

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => console.log(`listening on port 3000`));
