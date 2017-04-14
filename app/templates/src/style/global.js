// @flow

import { injectGlobal } from 'styled-components';
import theme from './theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  /*
  @font-face {
    font-family: MyWebFont;
    src:
      url('myfont.woff2') format('woff2'),
      url('myfont.woff') format('woff');
  }
  */

  html {
    font-size: ${theme.fontSizeHtml};
  }

  body {
    color: ${theme.color03};
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: ${theme.color04};
    text-decoration: underline;
    cursor: pointer;
  }

  a:hover {
    color: ${theme.color05};
  }

  canvas {
    display: block;
  }
`;
