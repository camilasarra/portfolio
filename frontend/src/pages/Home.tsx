import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Turning coffee into experiences, and doodles into design</Title>
      <Subtitle>Designer | Developer | Creative Mind</Subtitle>
    </HomeContainer>
  );
};

export default Home;