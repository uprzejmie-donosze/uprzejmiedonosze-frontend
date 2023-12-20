import styled, { keyframes } from "styled-components";
import { colors, convertHex, flowBottom, flowTop, rotate } from "../../styles";

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
    animation: ${flowBottom} 1.5s infinite ease-out;
  }

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${colors.secondary};
    animation: ${flowTop} 1.5s infinite ease-in;
`;

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  letter-spacing: 0.6px;
`;

export const Spinner = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: transparent;
  border-radius: 100%;
  border: 3px solid ${colors.primary};
  border-left-color: ${colors.white};
  animation: ${rotate} 0.3s linear infinite;
  margin: 1rem auto;
`;
