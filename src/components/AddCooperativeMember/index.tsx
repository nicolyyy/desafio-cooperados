import { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import { CooperativeMember } from "../../types/CooperativeMember";
import {
  Box,
  Button,
  Content,
  Form,
  Label,
  RadioButton,
  RadioButtonContainer,
} from "./styles";
import { Container } from "../Home/styles";

type Props = {
  onBackBtnClick: () => void;
  onSubmit: (data: CooperativeMember) => void;
};

export const AddCooperativeMember = (props: Props) => {
  const { onSubmit, onBackBtnClick } = props;

  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [date, setDate] = useState("");
  const [income, setIncome] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cooperativeMember, setCooperativeMember] = useState<CooperativeMember>(
    {
      id: "",
      name: "",
      identificationNumber: "",
      date: "",
      legalEntityType: "",
      income: "",
      phoneNumber: "",
    }
  );

  const onHandleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onHandleIdentificationNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
      .replace(/\D/g, "")
      .slice(0, MAX_IDENTIFICATION_DIGITS);
    setIdentificationNumber(inputValue);
  };

  const onHandleBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onHandleIncome = (e: ChangeEvent<HTMLInputElement>) => {
    setIncome(e.target.value);
  };

  const onHandlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const data: CooperativeMember = {
      id: new Date().toJSON.toString(),
      name,
      identificationNumber,
      legalEntityType: "",
      date,
      income,
      phoneNumber,
    };

    if (!name || !identificationNumber || !date) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // melhorar essa lógica
    onSubmit(data);
    onBackBtnClick();
  };

  const isLegalPerson = cooperativeMember.legalEntityType === "jurídica";
  const MAX_IDENTIFICATION_DIGITS = 14;

  return (
    <Box>
      <Form>
        <Label>
          Tipo de Pessoa:
          <br />
          <RadioButtonContainer>
            <RadioButton
              type="radio"
              checked={cooperativeMember.legalEntityType === "física"}
              onChange={() =>
                setCooperativeMember((prev) => ({
                  ...prev,
                  legalEntityType: "física",
                }))
              }
              name="tipoPessoa"
              value="física"
            />
            <Label>Pessoa Física</Label>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton
              type="radio"
              name="tipoPessoa"
              value="juridica"
              checked={cooperativeMember.legalEntityType === "jurídica"}
              onChange={() =>
                setCooperativeMember((prev) => ({
                  ...prev,
                  legalEntityType: "jurídica",
                }))
              }
            />
            <Label>Pessoa Jurídica</Label>
          </RadioButtonContainer>
        </Label>
        {isLegalPerson ? (
          <>
            <div>
              <Label>Nome:</Label>
              <input
                type="text"
                value={name}
                onChange={onHandleName}
                required
              ></input>
            </div>
            <div>
              <Label>CNPJ:</Label>
              <InputMask
                type="text"
                mask="99.999.999/9999-99"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Data de Constituição:</Label>
              <InputMask
                type="text"
                mask="99/99/9999"
                value={date}
                onChange={onHandleBirthDate}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Faturamento (opcional):</Label>
              <InputMask
                type="text"
                mask="R$ 99,999,999.99"
                value={income}
                onChange={onHandleIncome}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Telefone (opcional):</Label>
              <InputMask
                type="text"
                mask="(99) 99999-9999"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
                required
              ></InputMask>
            </div>
          </>
        ) : (
          <>
            <div>
              <Label>Nome:</Label>
              <input
                type="text"
                value={name}
                onChange={onHandleName}
                required
              ></input>
            </div>
            <div>
              <Label>CPF:</Label>
              <InputMask
                type="text"
                mask="999.999.999-99"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Data de Nascimento:</Label>
              <InputMask
                type="text"
                mask="99/99/9999"
                value={date}
                onChange={onHandleBirthDate}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Renda (opcional):</Label>
              <InputMask
                type="text"
                value={income}
                mask="R$ 999999999"
                onChange={onHandleIncome}
                required
              ></InputMask>
            </div>
            <div>
              <Label>Telefone (opcional):</Label>
              <InputMask
                type="text"
                mask="(99) 99999-9999"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
                required
              ></InputMask>
            </div>
          </>
        )}

        <Content>
          <Button onClick={onBackBtnClick}> Voltar </Button>
          <Button onClick={onHandleSubmit}> Adicionar cooperado </Button>
        </Content>
      </Form>
    </Box>
  );
};
