import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-constext";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { Button } from "antd";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Main></Main>
      <ProjectListScreen />
    </div>
  );
};

const Header = styled(Row)``;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main``;
