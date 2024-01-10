import styled from "styled-components";
import mediaMin, { breakpoints } from "../../styles/mediaQueries";
import { Button, colors, convertHex, radius } from "../../styles";

const SPACING = " 2rem";

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
  margin-top: ${SPACING};
`;

export const FormColumn = styled.div`
  margin-top: ${SPACING};

  ${mediaMin(breakpoints.md)} {
    width: 49%;
  }
`;

export const CategoriesTitle = styled.h3`
  font-size: 18px;
  font-weight: 300;
  padding: 0;
  margin: ${SPACING} 0;
`;

export const CategoriesHint = styled.p`
  margin: 0;
  padding: ${SPACING} 0;

  & > a {
    color: ${colors.primary};
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-row-gap: ${SPACING};
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: flex-start;

  ${mediaMin(breakpoints.md)} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;
  }
`;
export const CategoryItem = styled.div<{ selected: boolean }>`
  padding: 5px;
  border-radius: ${radius};
  background: ${(props) => (props.selected ? "#009c7f14" : "transparent")};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${colors.placeholder};
  }
`;

export const CategoryWarning = styled.small`
  display: block;
  margin-bottom: 10px;
  color: ${colors.secondary};
`;

export const Category = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
`;

export const CategoryImage = styled.img`
  width: 80px;
  height: 80px;
  background: ${colors.secondary};
  margin-right: 10px;
  border-radius: ${radius};
`;

export const CategoryInfo = styled.figcaption`
  display: flex;
  flex-direction: column;
`;

export const CategoryNote = styled.span`
  font-weight: 400;
  padding-top: 5px;
  color: ${colors.textLight};
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
