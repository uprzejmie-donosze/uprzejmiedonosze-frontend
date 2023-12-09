import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { Link } from '@reach/router';

export const Navbar = styled.nav`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-flow: nowrap;
  width: 100%;
  color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

Navbar.Logo = styled(Link)`
  color: inherit;
  text-decoration: unset;
  margin-right: 10px;

  &:visited: {
    color: inherit;
  }

  &:hover {
    opacity: .7;
  }
`;