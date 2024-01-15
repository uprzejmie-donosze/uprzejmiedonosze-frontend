import styled, { css, keyframes } from "styled-components";
import { colors } from "../../styles";

const progress = keyframes`
  0% {
    right: 0%;
  }
  100% {
    right: 100%;
  }
`;

export const Toasts = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
`

export const Toast = styled.div<{ "data-active": boolean }>`
  padding: 10px 20px 10px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: ${colors.white};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${colors.error};
  overflow: hidden;
  transform: ${(props) =>
    props["data-active"] ? "translateX(0)" : "translateX(calc(100% + 10px))"};
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    font-size: 13px;
  }

  .title {
    font-weight: 600;
    color: ${colors.text};
  }

  .text {
    color: ${colors.textLight};
    font-weight: 400;
  }

  .close {
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    top: 5px;
    right: 5px;
    padding: 0px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0.7;
    border: 0;
    background: ${colors.background};

    &:hover {
      opacity: 1;
    }
  }

  .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: ${colors.background};

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: ${colors.error};

      ${(props) =>
        props["data-active"] &&
        css`
          animation: ${progress} 8s linear forwards;
        `}
    }
  }
`;
