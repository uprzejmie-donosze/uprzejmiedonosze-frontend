import styled from 'styled-components';
import { Link } from '@reach/router';

import { colors } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

export const Navbar = styled.nav`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};

  ${mediaMin(breakpoints.lg)} {
    background: ${colors.background};
    border-bottom: 1px solid #e2e2e2;
  }
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  ${mediaMin(breakpoints.lg)} {
    position: relative;
  }
`;

Navbar.Logo = styled(Link)`
  color: rgba(0, 0, 0, .2);
  text-decoration: none;
  font-weight: 600;

  ${mediaMin(breakpoints.lg)} {
    margin-left: auto;
    color: lightgray;
  }
`;
