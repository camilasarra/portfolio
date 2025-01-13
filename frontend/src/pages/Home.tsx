import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 10vh 20px;
`;

const Headline = styled.h1`
  font-size: 4rem; 
  font-weight: 700;
  color: rgb(255, 248, 242);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgb(255, 248, 242);
  margin: 1rem 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background:rgb(130, 12, 12);
  color: white;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background:rgb(236, 143, 143);
  }
`;

const Home = () => {
  return (
    <Container>
      <Headline>Hi, I’m Camila Sarra</Headline>
      <Subtitle>Designer, Developer, and Illustrator</Subtitle>
      <CTAButton href="/work">View My Work</CTAButton>
    </Container>
  );
};

export default Home;