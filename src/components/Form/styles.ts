import styled, { css } from "styled-components";
import { breakpoints, colors, inputStyles, convertHex } from "../../styles";
import mediaMin from "../../styles/mediaQueries";

const SPACING = "1.5";

export const Field = styled.div<{ "data-type": string }>`
  position: relative;
  width: 100%;
  margin: 0;
  padding: ${`${SPACING}rem`} 0 0;

  ${(props) =>
    props["data-type"] === "radio" &&
    css`
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    `}
`;

export const FieldFlex = styled(Field)`
  display: flex;
  align-items: center;
`;

export const FieldHeader = styled.div<{ "data-type": string }>`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0.3rem;

  ${mediaMin(breakpoints.md)} {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  ${(props) =>
    props["data-type"] === "radio" &&
    css`
      margin-bottom: 0;
      margin-left: 0.3rem;
    `}
`;

export const FieldError = styled.span`
  color: ${colors.error};
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
`;

export const FieldErrorFixed = styled(FieldError)`
  position: absolute;
  top: 0.75rem;
`;

export const FieldLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text};
  letter-spacing: 0.4px;
  margin-right: 0.5rem;
`;

export const FieldLabelSpaced = styled(FieldLabel)`
  padding-left: 0.5rem;
`;

export const FieldInput = styled.input<{
  "data-valid": boolean;
  "data-icon": boolean;
  disabled: boolean;
  onChange: (e: InputEvent) => void;
}>`
  ${inputStyles}

  background: ${(props) =>
    props["data-valid"] ? convertHex(colors.primary, 6) : colors.background};
  color: ${(props) => (props["data-valid"] ? colors.primary : colors.text)};
  border-color: ${(props) =>
    props["data-valid"] ? colors.primary : colors.border};
  padding-right: ${(props) => (props["data-icon"] ? "2.5rem" : ".5rem")};
`;

export const FieldIcon = styled.span<{ "data-value": boolean }>`
  position: absolute;
  bottom: 0.1rem;
  right: 0.6rem;
  color: ${(props) => (props["data-value"] ? colors.primary : colors.border)};

  svg {
    width: 20px;
  }
`;

export const RadioInputContainer = styled.div`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const RadioCheckedIndicator = styled.div`
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  background-color: ${colors.primary};
  transform: scale(0);
  pointer-events: none;
  border-radius: 100%;
  transition: transform 0.2s ease-in-out;
`;
