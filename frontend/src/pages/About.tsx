import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <p>
          Hi, I’m Camila Sarra! I’m a full-stack developer, UX/UI designer, and illustrator based in Buenos Aires, Argentina.
        </p>
        <p>
          I love crafting unique digital experiences by combining my technical expertise with creativity. With a background in film and illustration, I bring a storytelling perspective to every project.
        </p>
        <p>
          Let’s build something amazing together!
        </p>
      </Content>
    </AboutContainer>
  );
};

export default About;
