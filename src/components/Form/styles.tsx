import styled from "styled-components";
import { DottedLoader } from "../Icons";
import {
  breakpoints,
  colors,
  inputStyles,
  inputSize,
  radius,
  convertHex,
} from "../../styles";
import mediaMin from "../../styles/mediaQueries";

const SPACING = "1.5";
const CHECKBOX_SIZE = "18px";

export const Form = styled.form`
  flex: 1;
  width: 100%;
  margin-top: 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ${mediaMin(breakpoints.md)} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }

  ${mediaMin(breakpoints.md)} {
    flex: 0 0 calc(50% - 0.6rem);
    max-width: calc(50% - 0.6rem);
    height: 100%;

    & + & {
      margin-top: 0;
    }
  }
`;

export const FormSection = styled.div`
  padding: 1rem;
  background: ${colors.white};
  border-radius: ${radius};
  box-shadow: 0 2px 7px 0 rgba(5, 34, 97, 0.1);

  & + & {
    margin-top: 1rem;
  }
`;

export const FormList = styled.div`
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    width: 3px;
    height: 3px;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.primaryLighten};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primaryLight};
  }
`;

export const FormRowFlex = styled.div`
  ${mediaMin(breakpoints.md)} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > * {
      flex: 0 0 calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
      overflow: hidden;
    }
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 0.5rem;
  padding: 0 2px;
`;

export const FormTitle = styled.h3`
  margin: 0;
`;

export const FormText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const FormAction = styled.div`
  & + & {
    margin-left: 1rem;
  }
`;

export const FormLoader = styled(DottedLoader)`
  display: block;
  width: 50px;
  margin: 0 auto;
  color: ${colors.primary};
`;

export const FormGrayScreen = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
`;

export const Field = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: ${`${SPACING}rem`} 0 0;
`;

export const FieldFlex = styled(Field)`
  display: flex;
  align-items: center;
`;

export const FieldHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${mediaMin(breakpoints.md)} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const FieldError = styled.span`
  color: ${colors.error};
  font-size: 0.75rem;
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
  font-size: 0.85rem;
  font-weight: 600;
  color: ${colors.text};
  letter-spacing: 0.4px;
  margin-right: 0.5rem;
`;

export const FieldLabelSpaced = styled(FieldLabel)`
  padding-left: 0.5rem;
`;

export const FieldInput = styled.input<{
  isValid: boolean;
  hasIcon: boolean;
  disabled: boolean;
  onChange: (e: InputEvent) => void;
}>`
  ${inputStyles}

  background: ${(props) =>
    props.isValid ? convertHex(colors.primary, 6) : colors.background};
  color: ${(props) => (props.isValid ? colors.primary : colors.text)};
  border-color: ${(props) => (props.isValid ? colors.primary : colors.border)};
  padding-right: ${(props) => (props.hasIcon ? "2.5rem" : ".5rem")};
`;

export const FieldIcon = styled.span<{ hasValue: boolean }>`
  position: absolute;
  bottom: 0.1rem;
  right: 0.6rem;
  color: ${(props) => (props.hasValue ? colors.primary : colors.border)};

  svg {
    width: 20px;
  }
`;

export const FieldCheckbox = styled.input`
  ${inputStyles}

  position: relative;
  z-index: 1;
  height: initial;
  opacity: 0;

  &,
  &:checked {
    width: ${CHECKBOX_SIZE};
    height: ${CHECKBOX_SIZE};
    border: 1px solid;
  }
`;

export const FieldCheckboxBox = styled.div`
  position: absolute;
  bottom: ${`calc((100% - ${CHECKBOX_SIZE} - ${SPACING}) / 2)`};
  left: 0;
  width: ${CHECKBOX_SIZE};
  height: ${CHECKBOX_SIZE};
  border: 1px solid ${colors.border};
  border-radius: 3px;
  background: ${colors.white};

  &:before {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    content: "👌";
    color: ${colors.white};
    font-size: 0.7rem;
    line-height: ${CHECKBOX_SIZE};
    text-align: center;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }

  input:checked ~ & {
    background: ${colors.primary};
    border-color: ${colors.primary};

    &:before {
      transform: scale(1);
    }
  }
`;

export const FieldSelect = styled.select<{ isValid: boolean }>`
  ${inputStyles}

  background: ${(props) =>
    props.isValid ? colors.primaryLight : colors.background};
  color: ${(props) => (props.isValid ? colors.primary : colors.textLighten)};
  border-color: ${(props) =>
    props.isValid ? colors.primaryLight : colors.border};
`;

export const Textarea = styled.textarea<{ hasCode: boolean; isValid: boolean }>`
  ${inputStyles}
  resize: vertical;
  min-height: ${`${2 * inputSize}px`};
  white-space: pre;
  font-family: ${(props) => (props.hasCode ? "monospace" : "inherit")};
  font-size: ${(props) => (props.hasCode ? "1rem" : ".8rem")};
  line-height: 1.5;
  background: ${(props) =>
    props.isValid ? colors.primaryLight : colors.background};
  color: ${(props) => (props.isValid ? colors.primary : colors.textLighten)};
  border-color: ${(props) =>
    props.isValid ? colors.primaryLight : colors.border};
`;
