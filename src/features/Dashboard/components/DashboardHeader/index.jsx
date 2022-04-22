import { Avatar, Layout } from "antd";
import { ReactComponent as ProfilePublic } from "../../assets/Profile.svg";
import "../../styles.css";

const { Header } = Layout;

const DashboardHeader = () => {
  return (
    <Header className="dashboard-site-layout-header" style={{ margin: 15 }}>
      <div>
        <Avatar size={36} style={{ backgroundColor: "transparent", border: "1px solid #133774" }} icon={<ProfilePublic />} />
      </div>
      <p className="dashboard-site-layout-header-label">Profile</p>
    </Header>
  );
};

export default DashboardHeader;
