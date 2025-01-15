import React from "react";
import styled from "styled-components";

const WorkContainer = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.colors.accent};
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Work = () => {
  return (
    <WorkContainer>
      <Title>My Projects</Title>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Project 1</h3>
          <p>React App with Styled Components</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project 2</h3>
          <p>Fullstack MERN Project</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project 3</h3>
          <p>UX/UI Case Study</p>
        </ProjectCard>
      </ProjectsGrid>
    </WorkContainer>
  );
};

export default Work;