// @flow

import jss from 'jss';
import theme from '../../style/theme';

const styles = {
  wrapper: {
    padding: 10,
    fontSize: theme.fontSize10,
    textAlign: 'center',
  },
};

const { classes } = jss.createStyleSheet(styles, { meta: __filename }).attach();

export default classes;
