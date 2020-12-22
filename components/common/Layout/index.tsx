import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './_layout-styles';
import Meta from './Meta';
import Navigation from './Navigation';
import Footer from './Footer';

import { ReactElement } from 'react';

interface Props {
  children?: ReactElement[];
}

function Layout({ children }: Props): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      <LayoutContainer>
        <Navigation />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;

const MainContainer = styled.main``;
const LayoutContainer = styled.section``;
