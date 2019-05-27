import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Routes from "../routes/Routes";

function App() {
  return (
    <Container>
      <Header />
      <RouteContainer>
        <Routes />
      </RouteContainer>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const RouteContainer = styled.div`
  display: flex;
  justify-content: center;
`;
