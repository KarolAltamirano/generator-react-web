// @flow

import jss from 'jss';
import theme from '../../style/theme';

const styles = {
  wrapper: {
    position: 'relative',
    height: 100,
    margin: 10,
  },
  button: {
    padding: 10,
  },
  element: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    background: theme.color05,
  },
};

const { classes } = jss.createStyleSheet(styles, { meta: __filename }).attach();

export default classes;
