import { ChangeEvent, useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";

type Props = {
  data: CooperativeMember;
  onBackBtnClick: () => void;
  onUpdateBtnClick: (data: CooperativeMember) => void;
};

export const EditCooperativeMember = (props: Props) => {
  const { data, onBackBtnClick, onUpdateBtnClick } = props;

  const [name, setName] = useState(data.name);
  const [cpf, setCpf] = useState(data.cpf);
  const [birthDate, setBirthDate] = useState(data.birthDate);

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
    const updatedData: CooperativeMember = {
      id: data.id,
      name: name,
      cpf: cpf,
      birthDate: birthDate,
    };

    // melhorar essa lógica
    onUpdateBtnClick(updatedData);
    onBackBtnClick();
  };

  return (
    <>
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
          value="Editar Informações do Cooperado"
          onClick={onHandleSubmit}
        />
      </form>
    </>
  );
};
