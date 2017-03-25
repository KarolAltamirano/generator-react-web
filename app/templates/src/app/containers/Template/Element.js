// @flow

import styled from 'styled-components';

const Element = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: ${props => props.theme.color05};
`;

export default Element;
