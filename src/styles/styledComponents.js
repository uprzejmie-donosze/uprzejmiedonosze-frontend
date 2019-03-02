import styled from 'styled-components';
import { colors, navWidth } from './variables';
import mediaMin, { breakpoints } from './mediaQueries';

export const Container = styled.div`
  width: 100%;
  color: ${colors.text};
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 1rem;

  ${mediaMin(breakpoints.lg)} {
    margin-bottom: 0;
  }
`;

export const Layout = styled.div`
  ${mediaMin(breakpoints.lg)} {
      padding-left: ${navWidth};
    }
`;