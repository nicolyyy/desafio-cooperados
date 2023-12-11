import styled from "styled-components";

export const Table = styled.table`
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 32px 0;
  display: table;
  width: 100%;
  border-radius: 10px;
`;

export const ButtonsContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

`

export const Th = styled.th`
  padding: 25px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  background-color: rgba(255,255,255,0.3);
`;


export const Tr = styled.tr`
  border-top: 1px solid cadetblue;
  border-bottom: 1px solid cadetblue;
  letter-spacing: 1px;
  background-color: #e6e6fa;
  width: 20px;
  background-color: rgba(255,255,255,0.3);
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
`;

export const Button = styled.input`
  width: 60%;
  height: 35px;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  background-color: #377A76;
  padding: 0 24px;
  margin: 8px 0;
  display: flex;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

