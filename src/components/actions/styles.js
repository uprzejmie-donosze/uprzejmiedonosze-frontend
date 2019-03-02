import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { colors, navWidth } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

export const Button = styled.button`
  padding: .8rem 1.2rem;
  font-size: .85rem;
  font-weight: 600;
  color: ${colors.primary};
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: color .3s ease-in-out, background .3s ease-in-out, opacity .3s ease-in-out;
  outline-color: transparent;

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonBordered = styled(Button)`
  border-color: ${colors.primary};

  &:hover {
    color: ${colors.white};
    background: ${colors.primary};
  }
`;

export const ButtonFilled = styled(Button)`
    color: ${colors.white};
    background: ${colors.primary};
    border-color: ${colors.primary};

  &:hover {
    opacity: .9;
  }
`;
