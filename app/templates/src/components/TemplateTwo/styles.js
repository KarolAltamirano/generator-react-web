// @flow

import jss from 'jss';
// import theme from '../../style/theme';

const styles = {
  wrapper: {
    paddingLeft: 40,
  },
};

const { classes } = jss.createStyleSheet(styles, { meta: __filename }).attach();

export default classes;
