import styled from "styled-components"

export const Header = styled.header`
  background-color: cadetblue;
  color: white;
  text-align: center;
  width: 100%;
  padding: 24px 0;
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
  background-color: cadetblue;
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  margin-left: 30px;
  transition: background-color 0.2s;
  cursor: pointer;
`;
