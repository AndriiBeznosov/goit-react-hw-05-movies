import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  padding: 4px;
  color: #212121;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.tomato};
  }
`;

export const Nav = styled.nav`
  font-size: 16px;
  border-bottom: 1px solid #000;
  box-shadow: ${p => p.theme.boxShadow};
  padding: 20px 15px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  /* margin: 0;
  padding-left: 0; */
`;

export const Wrapper = styled.div``;
