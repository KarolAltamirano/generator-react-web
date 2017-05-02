// @flow

import jss from 'jss';
import theme from '../../style/theme';

const styles = {
  wrapper: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    maxWidth: '100%',
    padding: '0.5em',
    background: theme.color01,
    color: theme.color02,
    fontSize: theme.fontSize10,
    opacity: 0.9,
    zIndex: theme.zIndexVersion,
  },
};

const { classes } = jss.createStyleSheet(styles, { meta: __filename }).attach();

export default classes;
