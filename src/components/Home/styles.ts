import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 45px; 
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #fafafa;
  margin: 2% 0;
`;

export const H2 = styled.h2`
  font-size: 20px; 
  font-weight: 300;
  text-align: center;
  color: #fafafa;
  margin: 2% 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Content = styled.section`
  width: 100%;
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  width: 100%;
`;

export const Button = styled.button`
  width: 200px;
  height: 42px;
  background-color: #377A76;
  border-radius: 4px;
  color: #fafafa;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  cursor: pointer;
`;
