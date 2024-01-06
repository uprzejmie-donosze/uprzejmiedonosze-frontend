import { Link as RouterLink } from "@reach/router";
import styled from "styled-components";
import { Button, colors } from "../../styles";

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 30px 0;
`;

export const List = styled.ul`
  list-style: decimal;
  margin: 0 auto;
  max-width: 800px;
  padding-left: 15px;
`;

export const Item = styled.li`
  font-weight: 300;

  & + & {
    margin-top: 10px;
  }
`;

export const Link = styled(RouterLink)`
  color: ${colors.primary};
`;

export const Date = styled.p`
  font-weight: 300;
  text-align: center;
  margin: 30px 0;
`;

export const Action = styled(Button)`
  display: block;
  margin: 0 auto;
`;
