import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  padding: 4px;
  color: ${p => p.theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.tomato};
  }
`;

export const Nav = styled.nav`
  font-size: 16px;

  box-shadow: ${p => p.theme.boxShadow};
  padding: 20px 15px;
  background-color: ${p => p.theme.colors.black};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const Wrapper = styled.div`
  color: ${p => p.theme.colors.white};
`;
