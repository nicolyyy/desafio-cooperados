import React, { useState } from "react";

import { CooperativeMember } from "../../types/CooperativeMember";
import { Button, Content, StyledModal } from "./styles";

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

  const isLegalPerson = data.legalEntityType === "jurídica";

  return (
    <div>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={close}
        contentLabel="Visualizar Informações dos Cooperados"
      >
        <h2>Dados do Cooperado</h2>
        {isLegalPerson ? (
          <>
            <Content>
              <span>Nome: </span>
              {data.name}
            </Content>

            <Content>
              <span>CNPJ: </span>
              {data.identificationNumber}
            </Content>

            <Content>
              <span>Data de Constituição: </span>
              {data.birthDate}
            </Content>

            <Content>
              <span>Faturamento: </span>
              {data.income}
            </Content>

            <Content>
              <span>Telefone: </span>
              {data.phoneNumber}
            </Content>
          </>
        ) : (
          <>
            <Content>
              <span>Nome: </span>
              {data.name}
            </Content>

            <Content>
              <span>Cpf: </span>
              {data.identificationNumber}
            </Content>

            <Content>
              <span>Data de Nascimento: </span>
              {data.birthDate}
            </Content>

            <Content>
              <span>Renda: </span>
              {data.income}
            </Content>

            <Content>
              <span>Telefone: </span>
              {data.phoneNumber}
            </Content>
          </>
        )}
        <Button onClick={onCloseModal}>Fechar</Button>
      </StyledModal>
    </div>
  );
};
