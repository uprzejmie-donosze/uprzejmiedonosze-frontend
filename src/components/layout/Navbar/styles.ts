import styled, { StyledComponent, css } from "styled-components";
import { Link } from "@reach/router";
import { colors } from "../../../styles/variables";
import mediaMin, { breakpoints } from "../../../styles/mediaQueries";
import { SIDEBAR_WIDTH_LG } from "../../../styles/styledComponents";

const NAVBAR_HEIGHT = "60px";

type Navbar = StyledComponent<'div', any> & {
  Container: React.ElementType;
  Logo: React.ElementType;
};

export const Navbar: Navbar = styled.nav`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
  height: ${NAVBAR_HEIGHT};
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: nowrap;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  ${mediaMin(breakpoints.lg)} {
    margin-left: ${SIDEBAR_WIDTH_LG};
  }
`;

Navbar.Logo = styled(Link)`
  margin-right: 10px;
  user-select: none;
  font-weight: 600;
`;


interface MenuProps {
  readonly isNavOpened: boolean;
}

type Menu = StyledComponent<'div', any> & {
  Overlay: React.ElementType;
  Header: React.ElementType;
  Avatar: React.ElementType;
  Photo: React.ElementType;
  Title: React.ElementType;
  Body: React.ElementType;
  List: React.ElementType;
  Item: React.ElementType;
  Footer: React.ElementType;
  Burger: React.ElementType;
}

export const Menu: Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: -80%;
  z-index: 2;
  width: 80%;
  height: 100%;
  background-color: white;
  transition: transform 0.3s;

  ${(props) =>
    props.isNavOpened &&
    css`
      transform: translateX(100%);
    `};

  ${mediaMin(breakpoints.lg)} {
    transform: translateX(100%);
    width: ${SIDEBAR_WIDTH_LG};
    left: -${SIDEBAR_WIDTH_LG};
    border-right: 2px solid white;
  }
`;

Menu.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;

  ${(props) =>
    props.isNavOpened &&
    css`
      transform: translateX(100%);
      opacity: 1;
    `};

  ${mediaMin(breakpoints.lg)} {
    display: none;
    pointer-events: none;
  }
`;

Menu.Header = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  padding: 0 1rem;
  height: ${NAVBAR_HEIGHT};
`;

Menu.Avatar = styled.figure`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0;
  background-color: ${colors.secondary};
  border-radius: 100%;
  overflow: hidden;
  border: 2px solid ${colors.secondary};

  & > svg {
    display: block;
    width: 79%;
    height: 100%;
    margin: 0 auto;
  }
`;

Menu.Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

Menu.Title = styled(Link)`
  color: white;
  font-size: 14px;
  margin: 0 0 0 15px;
`;

Menu.Body = styled.div`
  height: calc(100% - ${NAVBAR_HEIGHT});
  overflow-y: scroll;
  overflow-x: hidden;
`;

Menu.List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & + & {
    border-top: 1px solid ${colors.background};
  }
`;

Menu.Item = styled.li`
  width: 100%;
  font-size: 0.85rem;
  color: ${colors.text};
  transition: all 0.2s ease-out;

  &:hover {
    background: ${colors.background};
    color: ${colors.primary};
  }

  & > a,
  a:visited {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: inherit;
    padding: 12px;
  }

  & svg {
    width: 0.85rem;
    height: 0.85rem;
    vertical-align: middle;
  }

  & > a[aria-current] {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

Menu.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${colors.background};
`;

Menu.Burger = styled.div`
  ${mediaMin(breakpoints.lg)} {
    display: none;
    pointer-events: none;
  }
`;
