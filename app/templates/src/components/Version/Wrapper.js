// @flow

import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 100%;
  padding: 0.5em;
  background: ${props => props.theme.color01};
  color: ${props => props.theme.color02};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize10};
  opacity: 0.9;
  z-index: ${props => props.theme.zIndexVersion};
`;

export default Wrapper;
