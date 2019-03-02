import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import mediaMin, { breakpoints } from '../../../styles/mediaQueries';

export const FormNavigation = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background: white;

  ${mediaMin(breakpoints.lg)} {
    position: relative;
    padding: 1rem 0 0;
    background: transparent;
  }
`;