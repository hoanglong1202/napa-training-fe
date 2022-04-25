import { PlusOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Space, Table } from "antd";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { ReactComponent as AccountPublic } from "../../assets/AccountPublic.svg";
import "../../styles.css";
import "./styles.css";

const { Content } = Layout;

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
        <a>Edit</a>
        <a>Sync</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

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

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

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
          minHeight: 'auto',
        }}
      >
        <div className="dashboard-table-content-header-container">
          <div className="dashboard-table-content-label">Account list</div>

          <div className="dashboard-table-content-button-header">
            <Input.Search allowClear style={{ width: 264 }} placeholder="Input search text" />
            <Button icon={<SyncOutlined />} htmlType="button" disabled style={{ marginLeft: 16 }}>
              Sync
            </Button>

            <Button type="primary" icon={<PlusOutlined />} htmlType="button" style={{ marginLeft: 8 }}>
              Add New
            </Button>
          </div>
        </div>

        <div>
          <Table className="dashboard-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      </Content>
    </>
  );
};

export default AccountPage;
