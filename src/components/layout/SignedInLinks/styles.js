import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { colors, navWidth } from '../../../styles/variables';
import mediaMin, { breakpoints } from '../../../styles/mediaQueries';

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

  ${mediaMin(breakpoints.lg)} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: ${navWidth};
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

SignInMenu.Header = styled.div`
  background: ${colors.secondary};
  padding: 1rem;
  height: 120px;

  ${mediaMin(breakpoints.lg)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 2rem;
    background: rgba(0, 0, 0, .1);
  }
`;

SignInMenu.Body = styled.div`
  height: calc(100% - 120px);
  overflow-y: scroll;
  overflow-x: hidden;

  ${mediaMin(breakpoints.lg)} {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    height: auto;
  }
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

SignInMenu.Menu = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
  padding: 1rem 1rem 1rem 0;
  list-style: none;

  & + & {
    border-top: 1px solid ${colors.background};
  }

  ${mediaMin(breakpoints.lg)} {
    padding: 2rem 2rem 2rem 0;

    & + & {
      border-top: 1px solid rgba(0, 0, 0, .1);
    }
  }
`;

SignInMenu.Item = styled.li`
  width: 100%;
`;

SignInMenu.Link = styled(Link)`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: .85rem;
  font-weight: 600;
  text-decoration: none;
  color: ${colors.text};
  letter-spacing: .3px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;

  ${mediaMin(breakpoints.lg)} {
    padding: .7rem 2rem;
    color: ${colors.white};
  }
`;

SignInMenu.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${colors.background};

  ${mediaMin(breakpoints.lg)} {
    margin-top: auto;
    padding: 2rem;
    border-top: 1px solid rgba(0, 0, 0, .1);
  }
`;

SignInMenu.Burger = styled.div`
  ${mediaMin(breakpoints.lg)} {
    visibility: hidden;
    transform: translate(0);
  }
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
