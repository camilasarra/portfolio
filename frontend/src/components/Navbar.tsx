import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
`;

const Logo = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.secondary};
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.small};
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Camila Sarra</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/about">About</a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;