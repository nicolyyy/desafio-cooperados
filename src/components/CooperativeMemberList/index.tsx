import { useState } from "react";

import { CooperativeMember } from "../../types/CooperativeMember";
import { CooperativeMemberViewModal } from "../CooperativeMemberViewModal";

import { Button, ButtonsContainer, Table, Td, Th, Tr } from "./styles";

type Props = {
  list: CooperativeMember[];
  onHandleDelete: (data: CooperativeMember) => void;
  onHandleEdit: (data: CooperativeMember) => void;
};

export const CooperativeMemberList = (props: Props) => {
  const { list, onHandleDelete, onHandleEdit } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(null as CooperativeMember | null);

  const showCooperativeMemberDetails = (data: CooperativeMember) => {
    setData(data);
    setIsModalVisible(true);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const ActionButtonComponent = ({
    label,
    onClick,
  }: {
    label: string;
    onClick: () => void;
  }) => <Button value={label} onClick={onClick} />;

  return (
    <>
      <Table>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF/CNPJ</Th>
          <Th>Data de Nascimento/Data de Constituição</Th>
          <Th>Renda/Faturamento</Th>
          <Th>Telefone</Th>
          <Th>Ações</Th>
        </Tr>
        {list.map((cooperativeMember) => {
          return (
            <Tr key={cooperativeMember.id}>
              <Td>{`${cooperativeMember.name}`}</Td>
              <Td>{`${cooperativeMember.identificationNumber}`}</Td>
              <Td>{`${cooperativeMember.birthDate}`}</Td>
              <Td>{`${cooperativeMember.income}`}</Td>
              <Td>{`${cooperativeMember.phoneNumber}`}</Td>
              <ButtonsContainer>
                <ActionButtonComponent
                  label="Visualizar"
                  onClick={() =>
                    showCooperativeMemberDetails(cooperativeMember)
                  }
                />
                <ActionButtonComponent
                  label="Editar"
                  onClick={() => onHandleEdit(cooperativeMember)}
                />
                <ActionButtonComponent
                  label="Deletar"
                  onClick={() => onHandleDelete(cooperativeMember)}
                />
              </ButtonsContainer>
            </Tr>
          );
        })}
      </Table>
      {isModalVisible && !!data && (
        <CooperativeMemberViewModal onCloseModal={onCloseModal} data={data} />
      )}
    </>
  );
};
