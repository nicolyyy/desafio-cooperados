import React, { useState } from "react";
import Modal from "react-modal";
import { CooperativeMember } from "../../types/CooperativeMember";

type Props = {
  onCloseModal: () => void;
  data: CooperativeMember;
};

export const CooperativeMemberViewModal = (props: Props) => {
  const { onCloseModal, data } = props;

  const [isModalOpen, setIsModalOpen] = useState(true);

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={close}
        contentLabel="Visualizar Informações dos Cooperados"
      >
        <h2>Dados do Cooperado</h2>
        <span>Nome: </span>
        {data.name}
        <br />
        <span>Cpf: </span>
        {data.cpf}
        <br />
        <span>Data de Nascimento: </span>
        {data.birthDate}
        <br />
        <button onClick={onCloseModal}>Fechar</button>
      </Modal>
    </div>
  );
};
