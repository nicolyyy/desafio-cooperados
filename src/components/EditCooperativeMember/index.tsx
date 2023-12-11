import { ChangeEvent, useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";
import { ButtonsContainer, Form, InputButton } from "./styles";

type Props = {
  data: CooperativeMember;
  onBackBtnClick: () => void;
  onUpdateBtnClick: (data: CooperativeMember) => void;
};

export const EditCooperativeMember = (props: Props) => {
  const { data, onBackBtnClick, onUpdateBtnClick } = props;

  const [name, setName] = useState(data.name);
  const [identificationNumber, setIdentificationNumber] = useState(
    data.identificationNumber
  );
  const [date, setDate] = useState(data.date);
  const [income, setIncome] = useState(data.income);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);

  const onHandleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onHandleIdentificationNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setIdentificationNumber(e.target.value);
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
    const updatedData: CooperativeMember = {
      id: data.id,
      name: name,
      identificationNumber: identificationNumber,
      date: date,
      legalEntityType: data.legalEntityType,
      income: income,
      phoneNumber: phoneNumber,
    };

    // melhorar essa lógica
    onUpdateBtnClick(updatedData);
    onBackBtnClick();
  };

  const isLegalPerson = data.legalEntityType === "jurídica";

  return (
    <>
      <Form>
        {isLegalPerson ? (
          <>
            <div>
              <label>Nome:</label>
              <input type="text" value={name} onChange={onHandleName} />
            </div>
            <div>
              <label>CNPJ:</label>
              <input
                type="text"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
              />
            </div>
            <div>
              <label>Data de Constituição:</label>
              <input type="text" value={date} onChange={onHandleBirthDate} />
            </div>
            <div>
              <label>Faturamento:</label>
              <input type="text" value={income} onChange={onHandleIncome} />
            </div>
            <div>
              <label>Telefone:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label>Nome:</label>
              <input type="text" value={name} onChange={onHandleName} />
            </div>
            <div>
              <label>CPF:</label>
              <input
                type="text"
                value={identificationNumber}
                onChange={onHandleIdentificationNumber}
              />
            </div>
            <div>
              <label>Data de Nascimento:</label>
              <input type="text" value={date} onChange={onHandleBirthDate} />
            </div>
            <div>
              <label>Renda:</label>
              <input type="text" value={income} onChange={onHandleIncome} />
            </div>
            <div>
              <label>Telefone:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
              />
            </div>
          </>
        )}

        <ButtonsContainer>
          <InputButton type="button" value="Voltar" onClick={onBackBtnClick} />
          <InputButton
            type="button"
            value="Salvar Informações do Cooperado"
            onClick={onHandleSubmit}
          />
        </ButtonsContainer>
      </Form>
    </>
  );
};
