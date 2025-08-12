import styled from "styled-components";
import { useAtom, useSetAtom } from "jotai";
import { removeTodoAtom, todoAtom } from "../atom";


const List = () => {

  const [todos] = useAtom(todoAtom);
  const removeTodo = useSetAtom(removeTodoAtom)

  if (todos.length === 0) {
    return <div>할 일을 등록해주세요</div>
  }

  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoContant key={todo.id}>
          {todo.text}
          <TodoContentBtn onClick={() => removeTodo(todo.id)}>X</TodoContentBtn>
        </TodoContant>
      ))}
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
