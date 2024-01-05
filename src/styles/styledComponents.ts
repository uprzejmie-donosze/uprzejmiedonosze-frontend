import styled from "styled-components";
import { colors, radius } from "./variables";

export const SIDEBAR_WIDTH_LG = "300px";
const BUTTON_SIZE = "30px";
const BUTTON_SIZE_SMALL = "18px";

export const Button = styled.button<{ color?: string }>`
  position: relative;
  height: ${BUTTON_SIZE};
  line-height: ${`calc(${BUTTON_SIZE} - 3px)`};
  padding: 0 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  border: 1px solid transparent;
  border-radius: ${radius};
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    border 0.3s ease-in-out,
    color 0.3s ease-in-out,
    background 0.3s ease-in-out;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${(props) => props.color || colors.primary};
`;

export const ButtonSmall = styled(Button)`
  height: ${BUTTON_SIZE_SMALL};
  line-height: ${`calc(${BUTTON_SIZE_SMALL} - 2px)`};
  border-color: ${colors.primary};

  &:hover {
    color: ${colors.white};
    background: ${colors.primary};
    opacity: 1;

    &:disabled {
      color: ${colors.primary};
      background: transparent;
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const ButtonError = styled(Button)`
  color: ${colors.white};
  background: ${colors.error};
  border-color: ${colors.error};
`;

export const ButtonErrorSmall = styled(ButtonSmall)`
  color: ${colors.white};
  background: ${colors.error};
  border-color: ${colors.error};

  &:hover {
    color: ${colors.white};
    background: ${colors.error};
    opacity: 0.8;

    &:disabled {
      color: ${colors.error};
      background: transparent;
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const ButtonSquare = styled(Button)`
  width: ${BUTTON_SIZE};
  padding: 0;
  line-height: 0;

  svg {
    path.animated {
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover > svg path.animated {
    transform: translateY(-2px);
  }
`;

export const ButtonSquareError = styled(ButtonSquare)`
  color: ${colors.white};
  background: ${colors.error};
  border-color: ${colors.error};
`;

export const ButtonClose = styled(Button)`
  width: 25px;
  height: 25px;
  line-height: 25px;
  color: ${colors.white};
  opacity: 0.8;
  background: ${colors.secondary};

  &:before,
  &:after {
    position: absolute;
    width: 70%;
    height: 3px;
    top: calc((100% - 3px - 1px) / 2);
    left: calc((100% - 70%) / 2);
    padding: 0;
    background: ${colors.white};
    border-radius: 20px;
    content: "";
    transition: all 0.3s ease-in-out;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;

    &:before,
    &:after {
      background: ${colors.white};
    }
  }
`;
