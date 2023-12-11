import { useEffect, useState } from "react";
import { Container, Content, Button, ListContent, H1, H2 } from "./styles";

import { CooperativeMember, PageEnum } from "../../types/CooperativeMember";

import { CooperativeMemberList } from "../CooperativeMemberList";
import { AddCooperativeMember } from "../AddCooperativeMember";
import { EditCooperativeMember } from "../EditCooperativeMember";

import GlobalStyle from "../../utils/globalStyles";

const Home = () => {
  const [cooperativeMemberList, setCooperativeMemberList] = useState(
    [] as CooperativeMember[]
  );

  const [page, setPage] = useState(PageEnum.list);
  const [editedData, setEditedData] = useState({} as CooperativeMember);

  useEffect(() => {
    const list = window.localStorage.getItem("CooperativeMember");

    if (list) {
      updateCooperativeMemberList(JSON.parse(list));
    }
  }, []);

  const onAddCooperativeMember = () => {
    setPage(PageEnum.add);
  };

  const showCooperativeMemberListPage = () => {
    setPage(PageEnum.list);
  };

  const updateCooperativeMemberList = (list: CooperativeMember[]) => {
    setCooperativeMemberList(list);
    window.localStorage.setItem("CooperativeMember", JSON.stringify(list));
  };

  const addCooperativeMember = (data: CooperativeMember) => {
    updateCooperativeMemberList([...cooperativeMemberList, data]);
  };

  const deleteCooperativeMember = (data: CooperativeMember) => {
    const indexToDelete = cooperativeMemberList.indexOf(data);
    const tempList = [...cooperativeMemberList];

    tempList.splice(indexToDelete, 1);
    updateCooperativeMemberList(tempList);
  };

  const editCooperativeMemberData = (data: CooperativeMember) => {
    setPage(PageEnum.edit);
    setEditedData(data);
  };

  const updatedData = (data: CooperativeMember) => {
    const indexOfRecord = cooperativeMemberList.findIndex(
      (cooperativeMember) => cooperativeMember.id === data.id
    );
    const tempData = [...cooperativeMemberList];
    tempData[indexOfRecord] = data;

    updateCooperativeMemberList(tempData);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Cadastro de Cooperados</H1>
        <H2>Desafio Front-End</H2>

        <Content>
          <ListContent>
            {/* melhorar essa lógica */}
            {page === PageEnum.list && (
              <>
                <CooperativeMemberList
                  list={cooperativeMemberList}
                  onHandleDelete={deleteCooperativeMember}
                  onHandleEdit={editCooperativeMemberData}
                />
                <Button onClick={onAddCooperativeMember}>
                  Adicionar cooperado
                </Button>
              </>
            )}
          </ListContent>

          {page === PageEnum.add && (
            <AddCooperativeMember
              onBackBtnClick={showCooperativeMemberListPage}
              onSubmit={addCooperativeMember}
            />
          )}

          {page === PageEnum.edit && (
            <EditCooperativeMember
              data={editedData}
              onBackBtnClick={showCooperativeMemberListPage}
              onUpdateBtnClick={updatedData}
            />
          )}
        </Content>
      </Container>
    </>
  );
};

export default Home;
