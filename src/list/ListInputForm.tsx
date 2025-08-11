import styled from "styled-components";

const ListInputForm = () => {
  return (
    <InputForm>
      <InputLabel>
        할일을 입력하세요
        <InputText type="text" name="input-text" placeholder="내용을 입력해주세요" required></InputText>
      </InputLabel>
      <InpuBtn type="button"> 작성 </InpuBtn>
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
