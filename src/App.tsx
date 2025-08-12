import styled, { createGlobalStyle } from "styled-components"
import List from "./list/List";

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>To Do List</Title>
        <List />
      </Container>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    color: #333;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: cornflowerblue;
`

export default App
