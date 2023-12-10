import { ChangeEvent, useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";

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
    <form>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={onHandleName}></input>
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" value={cpf} onChange={onHandleCpf}></input>
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input
          type="text"
          value={birthDate}
          onChange={onHandleBirthDate}
        ></input>
      </div>

      <input type="button" value="Voltar" onClick={onBackBtnClick} />
      <input
        type="button"
        value="Adicionar Cooperado"
        onClick={onHandleSubmit}
      />
    </form>
  );
};
