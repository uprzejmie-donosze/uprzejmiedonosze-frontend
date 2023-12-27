import styled from "styled-components";
import mediaMin, { breakpoints } from "../../styles/mediaQueries";
import { colors } from "../../styles";

export const FormRow = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;

  ${mediaMin(breakpoints.md)} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      width: 49.5%;
    }
  }
`;

export const Category = styled.figure`
  display: flex;
  flex-irection: row;
  align-items: flex-start;
  margin: 0,
`
export const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  background: ${colors.secondary};
  margin-right: 10px;
`
export const CategoryInfo = styled.figcaption`
  display: flex;
  flex-direction: column;
`
