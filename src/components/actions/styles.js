import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { colors, navWidth } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

export const Button = styled.button`
  padding: .5rem 1rem;
  font-size: .85rem;
  font-weight: 600;
  color: ${colors.primary};
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: color .3s ease-in-out, background .3s ease-in-out, opacity .3s ease-in-out;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonStatus = styled(Button)`
  padding: .3rem .6rem;
  margin: 0 .5rem .5rem 0;
  border-radius: 60px;
  font-size: .75rem;
  background: ${props => props.isActive ? colors.primary: colors.background};
  color: ${props => props.isActive ? colors.white: colors.text};
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
