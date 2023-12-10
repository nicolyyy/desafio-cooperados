import { ChangeEvent, useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";
import { Box, Button, Content, Form, Label } from "./styles";

type Props = {
  onBackBtnClick: () => void;
  onSubmit: (data: CooperativeMember) => void;
};

export const AddCooperativeMember = (props: Props) => {
  const { onSubmit, onBackBtnClick } = props;

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const onHandleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onHandleCpf = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const onHandleBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const data: CooperativeMember = {
      id: new Date().toJSON.toString(),
      name: name,
      cpf: cpf,
      birthDate: birthDate,
    };

    // melhorar essa lógica
    onSubmit(data);
    onBackBtnClick();
  };

  return (
    <Box>
      <Form>
        <div>
          <Label>Nome:</Label>
          <input type="text" value={name} onChange={onHandleName}></input>
        </div>
        <div>
          <Label>CPF:</Label>
          <input type="text" value={cpf} onChange={onHandleCpf}></input>
        </div>
        <div>
          <Label>Data de Nascimento:</Label>
          <input
            type="text"
            value={birthDate}
            onChange={onHandleBirthDate}
          ></input>
        </div>
      <Content>
        <Button onClick={onBackBtnClick}> Voltar </Button>
        <Button onClick={onHandleSubmit}> Adicionar cooperado </Button>
      </Content>
      </Form>
    </Box>
  );
};
