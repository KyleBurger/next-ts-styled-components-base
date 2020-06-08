import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './_layout-styles';
// import Meta from './Meta';

// const withLayout = (Page) => {
//   return (props) => (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {/* <Meta /> */}
//       <MainStyles>
//         {/* <Navigation /> */}
//         <div>Navigation goes here</div>
//         <ContentContainer>
//           <Page />
//         </ContentContainer>
//         {/* <Footer /> */}
//         <div>Footer goes here</div>
//       </MainStyles>
//     </ThemeProvider>
//   );
// };

export default class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Meta /> */}
        <MainStyles>
          <div>Insert Navigation Component Here</div>
          {/* <Navigation /> */}
          <ContentContainer>{this.props.children}</ContentContainer>
          {/* <Footer /> */}
          <div>Insert Footer Component Here</div>
        </MainStyles>
      </ThemeProvider>
    );
  }
}

// export default withLayout;

const MainStyles = styled.main``;

const ContentContainer = styled.section`
  margin-top: 7.3rem;
`;
