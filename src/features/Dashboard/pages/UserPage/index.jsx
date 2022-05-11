import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Space, Table } from "antd";
import { useState } from "react";
import { ReactComponent as UserPublic } from "../../assets/UserPublic.svg";
import DashboardHeader from "../../components/DashboardHeader";
import "../../styles.css";
import AddUserModal from "./components/AddUserModal";
import EditUserModal from "./components/EditUserModal";
import "./styles.css";

const { Content } = Layout;

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Text ${i}`,
    email: `text.no${i}@napa.global.com`,
  });
}

const UserPage = () => {
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);
  const [isEditUserModalVisible, setIsEditUserModalVisible] = useState(false);

  const showAddUserModal = () => {
    setIsAddUserModalVisible(true);
  };

  const handleAddUserModalOk = () => {
    setIsAddUserModalVisible(false);
  };

  const handleAddUserModalCancel = () => {
    setIsAddUserModalVisible(false);
  };

  const showEditUserModal = () => {
    setIsEditUserModalVisible(true);
  };

  const handleEditUserModalOk = () => {
    setIsEditUserModalVisible(false);
  };

  const handleEditUserModalCancel = () => {
    setIsEditUserModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "40%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "40%",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a href="#">Reset Password</a>
          <a href="#" onClick={showEditUserModal}>
            Edit
          </a>
          <a href="/">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <DashboardHeader title="User" icon={<UserPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <div className="dashboard-table-content-header-container">
          <div className="dashboard-table-content-label">User list</div>

          <div className="dashboard-table-content-button-header">
            <Input.Search allowClear style={{ width: 264 }} placeholder="Input search text" />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              htmlType="button"
              style={{ marginLeft: 16 }}
              onClick={showAddUserModal}
            >
              Add New
            </Button>
          </div>
        </div>

        <div>
          <Table className="dashboard-table" columns={columns} dataSource={data} />
        </div>
      </Content>

      <AddUserModal
        handleOk={handleAddUserModalOk}
        handleCancel={handleAddUserModalCancel}
        isModalVisible={isAddUserModalVisible}
      />

      <EditUserModal
        handleOk={handleEditUserModalOk}
        handleCancel={handleEditUserModalCancel}
        isModalVisible={isEditUserModalVisible}
      />
    </>
  );
};

export default UserPage;
