import styled from "styled-components";
import { Button, colors } from "../../styles";
import mediaMin, { breakpoints } from "../../styles/mediaQueries";

export const FormContent = styled.div`
  ${mediaMin(breakpoints.lg)} {
    display: flex;
    justify-content: space-between;
  }
`;

export const TextHint = styled.p`
  display: block;
  margin: 0;
  margin-top: 10px;
  color: ${colors.textLight};
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  border: 1px solid transparent;

  ${mediaMin(breakpoints.lg)} {
    width: 48%;
    padding: 0;
  }
`;

export const Field = styled.div`
  padding-top: 1.5rem;
`;

export const Legend = styled.legend`
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const Options = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

export const Submit = styled(Button)`
  & svg {
    display: block;
    width: 40px;
    margin: 0 auto;
    padding-left: 9px;
  }
`;
