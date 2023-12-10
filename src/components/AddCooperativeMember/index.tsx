import { ChangeEvent, useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";
import { Box, Button, Content, Form, Label, RadioButton } from "./styles";

type Props = {
  onBackBtnClick: () => void;
  onSubmit: (data: CooperativeMember) => void;
};

export const AddCooperativeMember = (props: Props) => {
  const { onSubmit, onBackBtnClick } = props;

  const [name, setName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [income, setIncome] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cooperativeMember, setCooperativeMember] = useState<CooperativeMember>(
    {
      id: "",
      name: "",
      identificationNumber: "",
      birthDate: "",
      legalEntityType: "",
      income: "",
      phoneNumber: "",
    }
  );

  const onHandleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onHandleIdentificationNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setIdentificationNumber(e.target.value);
  };

  const onHandleBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
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
      birthDate,
      income,
      phoneNumber,
    };

    if (!name || !identificationNumber || !birthDate) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // melhorar essa lógica
    onSubmit(data);
    onBackBtnClick();
  };

  const isLegalPerson = cooperativeMember.legalEntityType === "jurídica";

  return (
    <Box>
      <Form>
        <Label>
          Tipo de Pessoa:
          <Label>
            Pessoa Física
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
          </Label>
          <Label>
            Pessoa Jurídica
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
          </Label>
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
              <input
                type="text"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
                required
              ></input>
            </div>
            <div>
              <Label>Data de Constituição:</Label>
              <input
                type="text"
                value={birthDate}
                onChange={onHandleBirthDate}
                required
              ></input>
            </div>
            <div>
              <Label>Faturamento (opcional):</Label>
              <input
                type="text"
                value={income}
                onChange={onHandleIncome}
                required
              ></input>
            </div>
            <div>
              <Label>Telefone (opcional):</Label>
              <input
                type="text"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
                required
              ></input>
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
              <input
                type="text"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
                required
              ></input>
            </div>
            <div>
              <Label>Data de Nascimento:</Label>
              <input
                type="text"
                value={birthDate}
                onChange={onHandleBirthDate}
                required
              ></input>
            </div>
            <div>
              <Label>Renda (opcional):</Label>
              <input
                type="text"
                value={income}
                onChange={onHandleIncome}
                required
              ></input>
            </div>
            <div>
              <Label>Telefone (opcional):</Label>
              <input
                type="text"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
                required
              ></input>
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
