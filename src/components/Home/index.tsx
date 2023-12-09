import { useState } from "react";
import { Article, Content } from "./styles";
import {
  CooperativeMember,
  dummyCooperativeMember,
} from "../../types/CooperativeMember";

const Home = () => {
  const [cooperativeMember, setCooperativeMember] = useState(
    dummyCooperativeMember as CooperativeMember[]
  );

  return (
    <>
      <Article>
        <header>
          <h1>Cadastro de Cooperados</h1>
        </header>
      </Article>

      <Content>
        <div>This is my content</div>
      </Content>
    </>
  );
};

export default Home;
