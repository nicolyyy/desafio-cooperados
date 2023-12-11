import styled from "styled-components";

export const Box = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  color: #fafafa;
  border: 1px solid #377A76;
  border-radius: 8px;
  padding: 0 24px;
  margin: 8px 0;
  background-color: #377A76;
`;

export const Content = styled.div`
  display: flex;
  margin: 8px 0;

  > button{
    margin: 0 4px;
    font-size: 16px;
  }

  > button:first-child{
    width: 30%;
  }

  > button:last-child{
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  background-color:  rgba(255,255,255,0.2);
  padding: 24px;
  border-radius: 4px;
  margin-top: 32px;
`;

export const Label = styled.label`
  color: #ffff;
  margin: 15px 0;
`;

export const RadioButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  align-content: center;

  > label{
    margin: 0  10px;
  }
`;

export const RadioButton = styled.input`
  width: 15px;
  display: inline;
`;