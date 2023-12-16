import styled from 'styled-components';
import { colors } from './variables';
import mediaMin, { breakpoints } from './mediaQueries';

export const SIDEBAR_WIDTH_LG = '300px';

export const Container = styled.div`
  width: 100%;
  color: ${colors.text};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  ${mediaMin(breakpoints.lg)} {
    width: calc(100% - ${SIDEBAR_WIDTH_LG});
    margin-left: ${SIDEBAR_WIDTH_LG};
  }
`;

const BUTTON_SIZE = '30px';

export const Button = styled.button`
  position: relative;
  height: ${BUTTON_SIZE};
  line-height: ${`calc(${BUTTON_SIZE} - 3px)`};
  padding: 0 .6rem;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .7px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: border .3s ease-in-out, color .3s ease-in-out, background .3s ease-in-out;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.primary};
`;