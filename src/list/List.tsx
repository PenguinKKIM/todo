import styled from "styled-components";
import ListInputForm from "./ListInputForm";

const List = () => {
  return (
    <TodoList>
      <ListInputForm />
      <TodoContant>테스트
        <TodoContentBtn>X</TodoContentBtn>
      </TodoContant>
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
  border-radius: 10px;
`

const TodoContant = styled.li`
  display: flex;
  justify-content: space-between;
  color: blueviolet;
`
const TodoContentBtn = styled.button`
  color: crimson;
  font-weight: 900;
`

export default List;
