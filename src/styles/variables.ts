import { keyframes } from "styled-components";

export const colors: { [key: string]: string } = {
  primary: "#009C7F",
  secondary: "#e9c200",
  background: "#F0F0F0",
  text: "#333",
  white: "#FFF",
  error: "#ff4e42",
  border: "#d1d1d1",
};

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const containerGutter = "1rem";
export const radius = "5px";
export const headerHeight = "50px";
export const inputSize = 35;

export const inputStyles = `
  width: 100%;
  height: ${`${inputSize}px`};
  padding: .5rem;
  color: ${colors.text};
  font-size: .8rem;
  line-height: 1.2;
  background: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 3px;
  outline: transparent;
  transition: all .3s ease-in-out;

  &:focus {
    border-color: ${colors.primary};
    background: ${colors.background};
    color: ${colors.text};
  }

  &::-webkit-input-placeholder {
    color: ${colors.text};
  }

  &:disabled {
    opacity: .6;
  }
`;

export const flowBottom = keyframes`
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;

export const flowTop = keyframes`
  0% {
    left: -150%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;
