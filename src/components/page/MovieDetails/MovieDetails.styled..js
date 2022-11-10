import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: block;
  text-align: center;
  border-radius: 7px;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 150px;
  color: #212121;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  background-color: ${p => p.theme.colors.backgroundSecondary};
  color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow};
  transition: color ${p => p.theme.transition},
    background-color ${p => p.theme.transition};
  &.active {
    color: ${p => p.theme.colors.tomato};
  }
  &:hover {
    background-color: ${p => p.theme.colors.tomato};
    color: ${p => p.theme.colors.white};
  }
`;
export const BackLink = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  padding: 3px 10px;
  text-decoration: none;
  font-size: 20px;
  background-color: ${p => p.theme.colors.backgroundSecondary};
  color: ${p => p.theme.colors.white};
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: ${p => p.theme.boxShadow};
  transition: background-color ${p => p.theme.transition};
  &:hover {
    background-color: ${p => p.theme.colors.tomato};
  }
`;

export const Card = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
  box-shadow: 0px 3px 4px #212121;
  padding: 15px;
`;

export const Image = styled.img`
  width: 320px;
  border-radius: 10px;
  box-shadow: ${p => p.theme.boxShadow};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
export const Title = styled.h2`
  font-size: 28px;
`;
export const Main = styled.main`
  padding-right: 15px;
  padding-left: 15px;
`;
