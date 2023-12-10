import { useState } from "react";
import { CooperativeMember } from "../../types/CooperativeMember";
import { CooperativeMemberViewModal } from "../CooperativeMemberViewModal";
import { Table, Td } from "./styles";

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

  const ActionButtonComponent = ({ label, onClick }: { label: string, onClick: () => void }) => (
    <input type="button" value={label} onClick={onClick} />
  );

  return (
    <>
      <Table>
        <tr>
          <Td>Nome</Td>
          <Td>CPF</Td>
          <Td>Data de Nascimento</Td>
        </tr>
        {list.map((cooperativeMember) => {
          return (
            <tr key={cooperativeMember.id}>
              <Td>{`${cooperativeMember.name}`}</Td>
              <Td>{`${cooperativeMember.cpf}`}</Td>
              <Td>{`${cooperativeMember.birthDate}`}</Td>
              <Td>
                <ActionButtonComponent label="Visualizar" onClick={() => showCooperativeMemberDetails(cooperativeMember)} />
                <ActionButtonComponent label="Editar" onClick={() => onHandleEdit(cooperativeMember)} />
                <ActionButtonComponent label="Deletar" onClick={() => onHandleDelete(cooperativeMember)} />
              </Td>
            </tr>
          );
        })}
      </Table>
      {isModalVisible && !!data && (
        <CooperativeMemberViewModal onCloseModal={onCloseModal} data={data} />
      )}
    </>
  );
};
