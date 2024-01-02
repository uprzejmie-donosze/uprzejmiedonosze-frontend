import { keyframes } from "styled-components";

export const colors: { [key: string]: string } = {
  primary: "#009C7F",
  secondary: "#9C7F00",
  background: "#f9f9f9",
  text: "#333",
  textLight: "#a1a1a1",
  white: "#FFF",
  error: "#ff4e42",
  border: "#d1d1d1",
  placeholder: "#eee",
};

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const containerGutter = "1rem";
export const radius = "5px";
export const headerHeight = "50px";
export const inputSize = 45;

export const inputStyles = `
  width: 100%;
  height: ${`${inputSize}px`};
  padding: 10px;
  color: ${colors.text};
  font-size: 14px;
  line-height: 1.2;
  background: ${colors.background};
  border: 2px solid ${colors.border};
  border-radius: ${radius};
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
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    opacity: 0.6;
  }

  &[type="radio"] {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    appearance: none;
    background-color: transparent;
    outline: none;
    border: 2px solid ${colors.border};

    &:checked{
      border: 2px solid ${colors.primary};

      & ~ div {
        transform: scale(1);
      }
    }
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

export const APP_WIDTH_SMALL = "800px";
export const APP_WIDTH_LARGE = "1200px";
