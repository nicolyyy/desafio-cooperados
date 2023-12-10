import { useEffect, useState } from "react";
import { Article, Content } from "./styles";

import { CooperativeMember, PageEnum } from "../../types/CooperativeMember";

import { CooperativeMemberList } from "../CooperativeMemberList";
import { AddCooperativeMember } from "../AddCooperativeMember";
import { EditCooperativeMember } from "../EditCooperativeMember";

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
      <Article>
        <header>
          <h1>Cadastro de Cooperados</h1>
        </header>
      </Article>

      <Content>
        {/* melhorar essa lógica */}
        {page === PageEnum.list && (
          <>
            <button onClick={onAddCooperativeMember}>Adicionar cooperado</button>
            <CooperativeMemberList
              list={cooperativeMemberList}
              onHandleDelete={deleteCooperativeMember}
              onHandleEdit={editCooperativeMemberData}
            />
          </>
        )}

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
    </>
  );
};

export default Home;
