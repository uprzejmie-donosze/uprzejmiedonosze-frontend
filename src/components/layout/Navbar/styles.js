import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { colors } from '../../../styles/variables';

export const Navbar = styled.nav`
  width: 100%;
  background: ${colors.primary};
  color: ${colors.white};
`;

Navbar.Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-flow: nowrap;
  width: 100%;
  color: ${colors.white};
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

Navbar.Logo = styled(Link)`
  color: inherit;
  text-decoration: unset;
  margin-right: 10px;

  &:visited: {
    color: inherit;
  }

  &:hover {
    opacity: .7;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: -80%;
  z-index: 2;
  width: 80%;
  height: 100%;
  background-color: white;
  transition: transform .3s;

  ${props =>
    props.isNavOpened && css`transform: translateX(100%);`
  };
`;

Menu.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  opacity: 0;
  transition: opacity .3s;

  ${props =>
    props.isNavOpened && css`transform: translateX(100%); opacity: 1;`
  };
`;

Menu.Header = styled.div`
  background: ${colors.secondary};
  padding: 1rem;
  height: 120px;
`;

Menu.Avatar = styled.figure`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0;
  background-color: white;
  border-radius: 100%;
  overflow: hidden;
`;

Menu.Photo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease-in-out;
`;

Menu.Title = styled.p`
  margin: 1rem 0 0;
`;

Menu.Body = styled.div`
  height: calc(100% - 120);
  overflow-y: scroll;
  overflow-x: hidden;
`;

Menu.Menu = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 1rem;

  & + & {
    border-top: 1px solid ${colors.background};
  }
`;

Menu.Item = styled.li`
  font-size: .8rem;

  & + & {
    padding-top: 1rem;
  }
`;

Menu.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${colors.background};
`;

Menu.Burger = styled.div`

`;
