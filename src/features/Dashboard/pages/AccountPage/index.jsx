import { PlusOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Space, Table } from "antd";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { ReactComponent as AccountPublic } from "../../assets/AccountPublic.svg";
import "../../styles.css";
import "./styles.css";
import AddAccountModal from "./components/AddAccountModal";
import EditAccountModal from "./components/EditAccountModal";

const { Content } = Layout;

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Text no ${i}`,
    password: `This is password`,
    agentCode: `Text`,
    agentName: `Text`,
    expiredDate: `Text`,
    syncDate: `Text`,
    status: `Text`,
    email: `text.no${i}@napa.global.com`,
  });
}

const AccountPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [isAddAccountModalVisible, setIsAddAccountModalVisible] = useState(false);
  const [isEditAccountModalVisible, setIsEditAccountModalVisible] = useState(false);

  const showAddAccountModal = () => {
    setIsAddAccountModalVisible(true);
  };

  const handleAddAccountModalOk = () => {
    setIsAddAccountModalVisible(false);
  };

  const handleAddAccountModalCancel = () => {
    setIsAddAccountModalVisible(false);
  };

  const showEditAccountModal = () => {
    setIsEditAccountModalVisible(true);
  };

  const handleEditAccountModalOk = () => {
    setIsEditAccountModalVisible(false);
  };

  const handleEditAccountModalCancel = () => {
    setIsAddAccountModalVisible(false);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
    },
    {
      title: "Password",
      dataIndex: "password",
      render: (text) => <Input.Password value={text} bordered={false} />,
    },
    {
      title: "Agent Code",
      dataIndex: "agentCode",
    },
    {
      title: "Agent Name",
      dataIndex: "agentName",
    },
    {
      title: "Expired Date",
      dataIndex: "expiredDate",
    },
    {
      title: "Synchronized Date",
      dataIndex: "syncDate",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a href="#" onClick={showEditAccountModal}>Edit</a>
          <a href="/">Sync</a>
          <a href="/">Delete</a>
        </Space>
      ),
    },
  ];
  

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <DashboardHeader title="Account" icon={<AccountPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: "auto",
        }}
      >
        <div className="dashboard-table-content-header-container">
          <div className="dashboard-table-content-label">Account list</div>

          <div className="dashboard-table-content-button-header">
            <Input.Search allowClear style={{ width: 264 }} placeholder="Input search text" />
            <Button icon={<SyncOutlined />} htmlType="button" disabled style={{ marginLeft: 16 }}>
              Sync
            </Button>

            <Button
              type="primary"
              icon={<PlusOutlined />}
              htmlType="button"
              style={{ marginLeft: 8 }}
              onClick={showAddAccountModal}
            >
              Add New
            </Button>
          </div>
        </div>

        <div>
          <Table className="dashboard-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      </Content>

      <AddAccountModal
        handleOk={handleAddAccountModalOk}
        handleCancel={handleAddAccountModalCancel}
        isModalVisible={isAddAccountModalVisible}
      />

      <EditAccountModal
        handleOk={handleEditAccountModalOk}
        handleCancel={handleEditAccountModalCancel}
        isModalVisible={isEditAccountModalVisible}
      />
    </>
  );
};

export default AccountPage;
