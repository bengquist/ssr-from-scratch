import React from "react";
import styled from "styled-components";
import Header from "./Header";
// import { Router } from "react-router";
// import { createBrowserHistory } from "history";
// import Routes from "./routes/Routes";

// const history = createBrowserHistory();

function App() {
  return (
    // <Router history={history}>
    <Container>
      <Header />
      <RouteContainer>{/* <Routes /> */}</RouteContainer>
    </Container>
    // </Router>
  );
}

export default App;

const Container = styled.div``;

const RouteContainer = styled.div`
  display: flex;
  justify-content: center;
`;
