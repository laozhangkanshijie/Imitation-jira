import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-constext";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader>
      <Main></Main>
      {/*<ProjectListScreen />*/}
    </div>
  );
};

const PageHeader = styled.header`
  height: 6rem;
`;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
