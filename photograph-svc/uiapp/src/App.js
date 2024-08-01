import GlobalStyles from "./GlobalStyles.tsx";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotographerCard from "./components/PhotographerCard.tsx";
import axios from "axios";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const MainHeading = styled.h1`
  font-weight: bold,
  margin-bottom: 50px;
`;

const FilterInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [filter, setFilter] = useState("");
  const [photographers, setPhotographers] = useState([]);
  const filteredPhotographers = photographers.filter((photographer) =>
    `${photographer.firstName} ${photographer.lastName}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  useEffect(() => {
    // Fetch photographers data from the API
    axios
      .get('/api/photographers')
      .then((response) => {
        setPhotographers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photographers data:", error);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <MainHeading>Photographers Data</MainHeading>
        <FilterInput
          type="text"
          placeholder="Search photographers..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <CardsContainer>
          {filteredPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              firstName={photographer.firstName}
              lastName={photographer.lastName}
              avatar={photographer.avatar}
              event={photographer.event}
              description={photographer.location}
            />
          ))}
        </CardsContainer>
      </Container>
    </>
  );
};

export default App;
