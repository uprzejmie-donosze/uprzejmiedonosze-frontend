import { Link } from "@reach/router";
import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Nav = styled.nav`
  border-bottom: 1px solid ${colors.border};
`;

Nav.List = styled.ul`
  display: flex;
  flex-flow: nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

Nav.Item = styled.li`
  position: relative;
  padding: 0 15px;
`;

Nav.Link = styled(Link)`
  color: inherit;
  text-decoration: none;
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
    borderRadius: 5px;
    background: ${colors.primary};
    transition: transform .2s ease;
    transform: scale(0);
  };

  &:hover {
    opacity: .7;
  }
`;