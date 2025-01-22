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
  padding: 2rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.secondary};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export default Home;