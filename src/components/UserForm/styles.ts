import styled from "styled-components";
import { colors } from "../../styles";
import mediaMin, { breakpoints } from "../../styles/mediaQueries";

export const FormContent = styled.div`
  ${mediaMin(breakpoints.lg)} {
    display: flex;
  }
`;

export const TextHint = styled.p`
  display: block;
  margin: 0;
  margin-top: 10px;
  color: ${colors.textLight};
  font-size: 15px;
`;

export const Fieldset = styled.fieldset`
  margin-bottom: 20px;
  border: 1px solid transparent;
`;

export const Legend = styled.legend`
  font-size: 20px;
  font-weight: 600;
  padding: 0;
  padding-bottom: 10px;
`;

export const Options = styled.div`
  & + & {
    margin-top: 30px;
  }
`;