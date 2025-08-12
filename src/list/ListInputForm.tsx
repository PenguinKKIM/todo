import { useSetAtom } from "jotai";
import styled from "styled-components";

import { useState } from "react";
import { addTodoAtom } from "../atom";

const ListInputForm = () => {
  const [text, setText] = useState("");

  const addTodo = useSetAtom(addTodoAtom);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = text;
    addTodo({
      text: value,
      categoryId: ""
    });
    setText("")
  }

  return (
    <InputForm onSubmit={onSubmit}>
      <InputLabel>
        할일을 입력하세요
        <InputText
          type="text"
          name="input-text"
          placeholder="내용을 입력해주세요"
          value={text}
          onChange={onChange}
          required>
        </InputText>
      </InputLabel>
      <InpuBtn type="submit"> 작성 </InpuBtn>
    </InputForm>
  );
}

const InputForm = styled.form`
  width: 400px;
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
