import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Space, Table } from "antd";
import { useState } from "react";
import { ReactComponent as UserPublic } from "../../assets/UserPublic.svg";
import DashboardHeader from "../../components/DashboardHeader";
import "../../styles.css";
import "./styles.css";

const { Content } = Layout;

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
        <a>Reset Password</a>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Text ${i}`,
    email: `text.no${i}@napa.global.com`,
  });
}

const UserPage = () => {
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
            <Button type="primary" icon={<PlusOutlined />} htmlType="button" style={{ marginLeft: 16 }}>
              Add New
            </Button>
          </div>
        </div>

        <div>
          <Table className="dashboard-table" columns={columns} dataSource={data} />
        </div>
      </Content>
    </>
  );
};

export default UserPage;
