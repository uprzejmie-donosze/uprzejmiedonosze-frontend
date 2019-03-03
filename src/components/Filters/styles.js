import styled from 'styled-components';
import { colors } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

export const Filter = styled.div`
  font-size: .8rem;
  font-weight: 600;
  padding: 0 1rem 1rem 0;
`;

export const Filters = styled.div`
  padding: 1rem 0;
`;

Filters.Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
`;

Filters.List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

