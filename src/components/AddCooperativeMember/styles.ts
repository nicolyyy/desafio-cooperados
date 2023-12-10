import styled from "styled-components"

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
  height: 40px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin: 8px 0;
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
  background-color: cadetblue;
  padding: 24px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: #333;
  margin: 15px 0;
`;