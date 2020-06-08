import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './_layout-styles';
// import Meta from './Meta';

// const withLayout = (Page) => {
//   return (props) => (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {/* <Meta /> */}
//       <LayoutContainer>
//         {/* <Navigation /> */}
//         <div>Navigation goes here</div>
//         <MainContainer>
//           <Page />
//         </MainContainer>
//         {/* <Footer /> */}
//         <div>Footer goes here</div>
//       </LayoutContainer>
//     </ThemeProvider>
//   );
// };

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Meta /> */}
        <LayoutContainer>
          <div>Insert Navigation Component Here</div>
          {/* <Navigation /> */}
          <MainContainer>{this.props.children}</MainContainer>
          {/* <Footer /> */}
          <div>Insert Footer Component Here</div>
        </LayoutContainer>
      </ThemeProvider>
    );
  }
}

// export default withLayout;

const MainContainer = styled.main``;
const LayoutContainer = styled.section``;
