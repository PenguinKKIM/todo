import styled from "styled-components";
import ListInputForm from "./ListInputForm";
import { useAtom } from "jotai";
import { TodoLocalStorage } from "../atom";

const List = () => {

  const [todos, setTodos] = useAtom(TodoLocalStorage);

  const removeTodo = (idx: number) =>
    setTodos(prev => prev.filter((_, i) => i !== idx));

  return (
    <TodoList>
      <ListInputForm />
      {todos.length === 0 ? (
        <div>할 일을 등록해주세요</div>
      ) : (
        todos
          .filter((t): t is string => !!t)
          .map((todo, i) => (
            <TodoContant key={i}>
              {todo}
              <TodoContentBtn onClick={() => removeTodo(i)}>X</TodoContentBtn>
            </TodoContant>
          ))
      )}
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
