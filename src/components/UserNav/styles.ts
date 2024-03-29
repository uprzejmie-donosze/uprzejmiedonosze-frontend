import { Link as RouteLink } from "@reach/router";
import styled from "styled-components";
import { colors, radius } from "../../styles";

export const Nav = styled.nav`
  border-bottom: 1px solid ${colors.border};
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  flex-flow: nowrap;
  padding-bottom: 15px;
`;

export const Item = styled.li`
  position: relative;
  padding: 0 15px;
`;

export const Link = styled(RouteLink)`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;

  &[aria-current] {
    color: ${colors.primary};

    &:before {
      transform: scale(1);
    }
  }

  &:before {
    position: absolute;
    bottom: -17px;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    content: "";
    border-radius: ${radius};
    background: ${colors.primary};
    transition: transform 0.2s ease;
    transform: scale(0);
  }
`;
