import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables';

export const SignInMenu = styled.div`
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

SignInMenu.Overlay = styled.div`
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

SignInMenu.Header = styled.div`
  background: ${colors.secondary};
  padding: 1rem;
  height: 120px;
`;

SignInMenu.Avatar = styled.figure`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0;
  background-color: white;
  border-radius: 100%;
  overflow: hidden;
`;

SignInMenu.Photo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease-in-out;
`;

SignInMenu.Title = styled.p`
  margin: 1rem 0 0;
`;

SignInMenu.Body = styled.div`
  height: calc(100% - 120);
  overflow-y: scroll;
  overflow-x: hidden;
`;

SignInMenu.Menu = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 1rem;

  & + & {
    border-top: 1px solid ${colors.background};
  }
`;

SignInMenu.Item = styled.li`
  font-size: .8rem;

  & + & {
    padding-top: 1rem;
  }
`;

SignInMenu.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${colors.background};
`;

SignInMenu.Burger = styled.div`

`;
