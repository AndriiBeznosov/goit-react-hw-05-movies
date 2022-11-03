import styled from 'styled-components';

const Container = styled.div`
  background-color: ${p => p.theme.colors.backgroundColor};
  color: ${p => p.theme.colors.primaryText};
  height: 100vh;
  font-size: 16px;
`;

export const App = () => {
  return <Container>React homework template</Container>;
};
