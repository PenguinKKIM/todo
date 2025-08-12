import { useAtom } from "jotai";
import styled from "styled-components";
import { TodoLocalStorage } from "../atom";
import { useState } from "react";

const ListInputForm = () => {
  const [todos, setTodos] = useAtom(TodoLocalStorage);
  const [text, setText] = useState("");

  const addTodo = () => {
    const value = text;
    if (!value) {
      return;
    } else {
      setTodos([...todos, value]);
      setText("")
    }
  }



  return (
    <InputForm onSubmit={(event) => { event.preventDefault(); addTodo(); }}>
      <InputLabel>
        할일을 입력하세요
        <InputText type="text" name="input-text" placeholder="내용을 입력해주세요" value={text} onChange={(event) => setText(event.target.value)} required></InputText>
      </InputLabel>
      <InpuBtn type="submit" onClick={() => (setTodos)}> 작성 </InpuBtn>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InputText = styled.input`
  padding: 12px;
`

const InpuBtn = styled.button`
  width: 100%;
  background: royalblue;
  color: aliceblue;
  font-weight: 600;
  padding: 12px;
  border-radius: 10px;
  &:hover{
    background: cornflowerblue;
    color: royalblue;
  }
`

export default ListInputForm;
