import styled from 'styled-components';
import { colors } from './variables';
import mediaMin, { breakpoints } from './mediaQueries';

export const SIDEBAR_WIDTH_LG = '300px';

export const Container = styled.div`
  width: 100%;
  color: ${colors.text};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  ${mediaMin(breakpoints.lg)} {
    width: calc(100% - ${SIDEBAR_WIDTH_LG});
    margin-left: ${SIDEBAR_WIDTH_LG};
  }
`;
