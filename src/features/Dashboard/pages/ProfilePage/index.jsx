import { Button, Layout } from "antd";
import DashboardHeader from "../../components/DashboardHeader";
import { ReactComponent as ProfilePublic } from "../../assets/Profile.svg";
import "../../styles.css";
import "./styles.css";
import { useState } from "react";
import EditPasswordModal from "./components/EditPasswordModal";

const { Content } = Layout;

const ProfilePage = () => {
  const [isEditPasswordModalVisible, setIsEditPasswordModalVisible] = useState(false);

  const showEditPasswordModal = () => {
    setIsEditPasswordModalVisible(true);
  };

  const handleEditPasswordModalOk = () => {
    setIsEditPasswordModalVisible(false);
  };

  const handleEditPasswordModalCancel = () => {
    setIsEditPasswordModalVisible(false);
  };

  return (
    <>
      <DashboardHeader title="Profile" icon={<ProfilePublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <div
          style={{
            margin: "17px 30px",
          }}
        >
          <span className="content-title">Account Setting</span>
        </div>

        <div className="content-container setting-form-container">
          <div className="profile-item-container">
            <div style={{ textAlign: "left", minWidth: 93 }}>Name</div>
            <span style={{ marginRight: 12 }}>:</span>
            <div>Username</div>
          </div>
          <div className="profile-item-container">
            <div style={{ textAlign: "left", minWidth: 93 }}>Email</div>
            <span style={{ marginRight: 12 }}>:</span>
            <div>emailname@faeast.com</div>
          </div>
          <div>
            <Button type="primary" htmlType="button" style={{ marginTop: 37 }} onClick={showEditPasswordModal}>
              Update Password
            </Button>
          </div>
        </div>
      </Content>

      <EditPasswordModal
        handleOk={handleEditPasswordModalOk}
        handleCancel={handleEditPasswordModalCancel}
        isModalVisible={isEditPasswordModalVisible}
      />
    </>
  );
};

export default ProfilePage;
