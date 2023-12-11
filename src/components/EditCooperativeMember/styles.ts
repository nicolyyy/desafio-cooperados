import styled from "styled-components";


export const Form = styled.form`
  width: 100%;
  color: #fafafa;
  background-color:  rgba(255,255,255,0.2);
  padding: 24px;
  border-radius: 4px;
  margin-top: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  margin: 12px 0;

  > input:first-child{
    width: 20%;
  }

  > input:last-child{
    width: 80%;
  }
`;

export const InputButton = styled.input`
  margin: 0 12px;
  width: 50%;
  height: 50px;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  background-color: #377A76;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;