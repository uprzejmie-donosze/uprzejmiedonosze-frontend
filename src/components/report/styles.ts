import styled from "styled-components";
import mediaMin, { breakpoints } from "../../styles/mediaQueries";
import { Button, colors, convertHex, radius } from "../../styles";

export const FormRow = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;

  ${mediaMin(breakpoints.md)} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FormRowSpaced = styled(FormRow)`
  margin-top: 1.5rem;

  ${mediaMin(breakpoints.md)} {
    align-items: flex-start;
  }
`;

export const FormColumn = styled.div`
  ${mediaMin(breakpoints.md)} {
    width: 49%;
  }
`;

export const Category = styled.figure`
  display: flex;
  flex-irection: row;
  align-items: flex-start;
  margin: 0;
`;

export const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  background: ${colors.secondary};
  margin-right: 10px;
`;
export const CategoryInfo = styled.figcaption`
  display: flex;
  flex-direction: column;

  & > span:last-child {
    color: ${colors.textLight};
  }
`;

export const FormInfo = styled.div`
  padding: 20px;
  background: ${convertHex(colors.secondary, 8)};
  color: ${colors.secondary};
  border-radius: ${radius};

  & > p {
    padding: 0;
    padding-bottom: 8px;
    margin: 0;
    font-weight: 600;
  }

  & > strong {
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 50px;
`;

export const Action = styled(Button)`
  display: block;
  margin-left: auto;
`;
