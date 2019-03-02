import styled from 'styled-components';
import { colors, navWidth } from './variables';
import mediaMin, { breakpoints } from './mediaQueries';

export const Container = styled.div`
  width: 100%;
  color: ${colors.text};
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 1rem;
`;

export const Layout = styled.div`
  ${mediaMin(breakpoints.lg)} {
      padding-left: ${navWidth};
    }
`;