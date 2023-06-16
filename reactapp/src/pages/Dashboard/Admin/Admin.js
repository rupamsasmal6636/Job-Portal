import { Layout } from "antd";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "../../../components/AppFooter";
import SideMenu from "../../../components/SideMenu";
import PageContent from "../../../components/PageContent";
import { BrowserRouter } from "react-router-dom";

const { Sider, Content } = Layout;

function Admin() {
  const contentStyle = {
    minHeight: 120,
  };
  const siderStyle = {
    backgroundColor: "white",
    color: "pink",
    width: "30%",
  };
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppHeader />
          <Layout hasSider>
            <Sider style={siderStyle}>
              <SideMenu />
            </Sider>
            <Content style={contentStyle}>
              <PageContent />
            </Content>
          </Layout>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default Admin;
