import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      {/* <Link to="/">Home</Link>
      <Link to="/people">People</Link> */}
      Header
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  grid-template-columns: repeat(3, 1fr);
  max-width: 300px;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 20px;
`;
