import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {}

const NavigationComponent = (props: Props) => (
  <HeaderContainer>
    <NavContainer>
      <nav>Insert Navigation Component Here</nav>
    </NavContainer>
  </HeaderContainer>
);

export default NavigationComponent;

const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
`;

const NavContainer = styled.nav`
  margin: 0 auto;
  max-width: 120rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;

  img {
    max-width: 16rem;
  }
`;
