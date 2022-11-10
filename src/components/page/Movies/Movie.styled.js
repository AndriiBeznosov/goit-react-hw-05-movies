import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${p => p.theme.colors.secondaryText};
  padding: 10px;
  border: transparent;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 18px;
  width: 300px;
  box-shadow: ${p => p.theme.boxShadow};
`;
export const Button = styled.button`
  border: transparent;
  padding: 10px 10px;
  border-radius: 4px;
  font-size: 18px;
  box-shadow: ${p => p.theme.boxShadow};
`;

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
