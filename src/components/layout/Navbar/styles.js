import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Navbar = styled.nav`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
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
`;
