import { Link } from '@reach/router';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { breakpoints, mediaMax } from '../../../styles/mediaQueries';

export const SignOutLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mediaMax(breakpoints.sm)} {
    flex-direction: column;
  }
`;

SignOutLinks.Item = styled.li`
  & + & {
    margin-left: 15px;
  }

  ${mediaMax(breakpoints.sm)} {
    & + & {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;

SignOutLinks.Link = styled(Link)`
  font-size: 14px;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    opacity: .7;
  }
`;