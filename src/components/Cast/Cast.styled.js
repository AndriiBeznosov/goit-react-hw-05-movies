// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 10px;
`;
export const Item = styled.li`
  width: 99px;
  color: ${p => p.theme.colors.white};
`;
