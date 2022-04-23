import { Layout } from "antd";
import DashboardHeader from "../../components/DashboardHeader";
import { ReactComponent as SettingPublic } from "../../assets/SettingPublic.svg";
import "../../styles.css";

const { Content } = Layout;

const SettingPage = () => {
  return (
    <>
      <DashboardHeader title="Setting" icon={<SettingPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <p>This is Setting Page</p>{" "}
      </Content>
    </>
  );
};

export default SettingPage;
