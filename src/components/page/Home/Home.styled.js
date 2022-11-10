import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
`;

export const NavItem = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.white};
`;

export const List = styled.ul`
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  list-style: none;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  padding: 0;
  width: 1200px;
`;

export const Item = styled.li`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${p => p.theme.boxShadow};
  transition: transform ${p => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;
export const Title = styled.h3`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
`;
