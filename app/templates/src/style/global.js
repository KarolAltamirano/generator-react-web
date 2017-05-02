// @flow

import jss from 'jss';
import preset from 'jss-preset-default';
import theme from './theme';

const styles = {
  /*
  '@font-face': {
    fontFamily: 'MyWebFont',
    src: `
      url('myfont.woff2') format('woff2'),
      url('myfont.woff') format('woff')
    `,
  },
  */
  '@global': {
    html: {
      fontSize: theme.fontSizeHtml,
    },
    body: {
      color: theme.color03,
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    a: {
      color: theme.color04,
      textDecoration: 'underline',
      cursor: 'pointer',
      '&:hover': {
        color: theme.color05,
      },
    },
    canvas: {
      display: 'block',
    },
  },
};

jss.setup(preset());
jss.createStyleSheet(styles, { meta: __filename }).attach();
