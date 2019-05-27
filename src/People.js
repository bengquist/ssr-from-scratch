import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://swapi.co/api/people");

      setPeople(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>People</h1>
      {people.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </Container>
  );
}

export default People;

const Container = styled.div``;
