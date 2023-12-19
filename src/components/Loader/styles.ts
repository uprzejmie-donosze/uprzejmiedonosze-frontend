import styled, { keyframes } from "styled-components";
import { colors } from "../../styles";

const content_first = keyframes`
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;

const content_second = keyframes`
  0% {
    left: -150%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;

export const LinearLoader = styled.div`
  overflow: hidden;
  width: 100%;
  height: 5px;
  background-color: ${colors.primary};
  margin: 0 auto;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${colors.secondary};
    animation: ${content_first} 1.5s infinite ease-out;
  }

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${colors.secondary};
    animation: ${content_second} 1.5s infinite ease-in;
`;
