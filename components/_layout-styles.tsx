import { createGlobalStyle } from 'styled-components';

export interface ITheme {
  colors: Colors;
  breakpoints: object;
}

export interface IThemeWrapper {
  theme: ITheme;
}

interface Colors {
  trueBlack: string;
  primary: string;
  black: string;
  black20: string;
  black40: string;
  black60: string;
  white: string;
  white20: string;
  white40: string;
  white60: string;
  social: SocialColors;
}

interface SocialColors {
  twitter: string;
  facebook: string;
  google: string;
  youtube: string;
  instagram: string;
  linkedin: string;
}

export const theme: ITheme = {
  colors: {
    trueBlack: '#000',
    primary: '#262626',
    black: '#333',
    black20: '#4f4f4f',
    black40: '#828282',
    black60: '#bdbdbd',
    white: '#fff',
    white20: '#f5f4f6',
    white40: '#f2f2f2',
    white60: '#e0e0e0',

    social: {
      twitter: '#00aced',
      facebook: '#3b5998',
      google: '#dd4b39',
      youtube: '#bb0000',
      instagram: '#fb3958',
      linkedin: '#000000',
    },
  },

  breakpoints: {
    desktopsm: '61.875rem', // 990px
    tablet: '48rem', // 768px
    phone: '35rem', // 560px
    phonesm: '30rem', // 480px
    phonexs: '20rem', // 320px
  },
};

export const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  @font-face {
    font-family: 'Barlow Condensed';
    src: url('/fonts/barlow/BarlowCondensed-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: "Barlow Condensed";
    src: url('/fonts/barlow/BarlowCondensed-Light.ttf') format('truetype');
    font-weight: light, 400;
  }

  @font-face {
    font-family: 'Barlow Condensed';
    src: url('/fonts/barlow/BarlowCondensed-Bold.ttf') format('truetype');
    font-weight: bold, 600;
  }

  @font-face {
    font-family: "Barlow Condensed";
    src: url('/fonts/barlow/BarlowCondensed-Italic.ttf') format('truetype');
    font-style: italic, oblique;
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  html,
  body {
    font-family: "Barlow Condensed",sans-serif;
    font-size: 67.5%;
    margin: 0;

    * {
      box-sizing: border-box;
    }
  }

  main {
    min-height: calc(100vh - 45rem);
    overflow: hidden;
  }

  h1 { font-size: 4.2rem; }
  h2 { font-size: 3.2rem; }
  h3 { font-size: 2.8rem; }
  h4 { font-size: 2.4rem; }
  h5 { font-size: 2rem; }
  h6 { font-size: 1.8rem; }
  div, span, a, p, ul, li { font-size: 1.8rem; }

  .base-font {
    font-family: "Barlow Condensed",sans-serif;
  }

  .center {
    text-align: center;
  }

  .instagram {color: ${() => theme.colors.social.instagram}}
  .facebook {color:${() => theme.colors.social.facebook}}
  .twitter {color:${() => theme.colors.social.twitter}}
  .linkedin {color: ${() => theme.colors.social.linkedin}}
`;
