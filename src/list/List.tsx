import styled from "styled-components";
import ListInputForm from "./ListInputForm";

const List = () => {
  return (
    <TodoList>
      <ListInputForm />
      <TodoContant>테스트</TodoContant>
    </TodoList>
  );
}

const TodoList = styled.ul`
  width: 400px;
  border: 1px solid royalblue;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`

const TodoContant = styled.li`
  color: blueviolet;
`

export default List;
