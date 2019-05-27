import express from "express";
import renderer from "./renderer";
import createStore from "./store/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "../src/routes/Routes";

const app = express();

app.use(express.static("public"));
app.get("*", async (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  await Promise.all(promises);

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log(`listening on port 3000`));
