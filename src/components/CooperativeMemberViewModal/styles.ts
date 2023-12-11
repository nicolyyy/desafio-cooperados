import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2{
    color: #fafafa;
    margin: 12px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 2px 0;
  padding: 6px 0;
  color: #fafafa;
 
  > span {
    margin-right: 12px;

  }
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  background-color: #377A76;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
